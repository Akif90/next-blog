import {authSession} from "@/utils/auth";
import prisma from "@/utils/connect";
import {NextResponse} from "next/server";

export const GET = async (req) => {
  const {searchParams} = new URL(req.url);
  const POST_PER_PAGE = 2;
  const page = searchParams.get("page");
  const cat = searchParams.get("cat");
  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
    where: {
      ...(cat && {catSlug: cat}),
    },
  };
  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({
        where: query.where,
      }),
    ]);
    return new NextResponse(JSON.stringify({posts, count}, {status: 200}));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({msg: "Something went wrong"}, {status: 500})
    );
  }
};

export const POST = async (req) => {
  const session = await authSession();
  const {searchParams} = new URL(req.url);
  const slug = searchParams.get("slug");
  if (!session) {
    return new NextResponse(
      JSON.stringify({msg: "Not Authenticated"}, {status: 401})
    );
  }
  try {
    const body = await req.json();

    if (!slug) {
      const post = await prisma.post.create({
        data: {
          ...body,
          userEmail: session.user.email,
        },
      });
    } else {
      await prisma.post.update({
        where: {
          slug,
        },
        data: {
          ...body,
          userEmail: session.user.email,
        },
      });
    }
    return new NextResponse(JSON.stringify(post, {status: 200}));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({msg: "Something went wrong"}, {status: 500})
    );
  }
};

export const DELETE = async (req) => {
  const {searchParams} = new URL(req.url);
  const slug = searchParams.get("slug");
  try {
    const deletePost = prisma.post.delete({
      where: {
        slug,
      },
    });
    const deleteComments = prisma.comment.deleteMany({
      where: {
        postSlug: slug,
      },
    });
    const transaction = await prisma.$transaction([deleteComments, deletePost]);
    console.log(transaction);
    return new NextResponse({msg: "Succesfully deleted", status: 200});
  } catch (error) {
    return new NextResponse({msg: "Something went wrong"});
  }
};
