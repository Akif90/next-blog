import prisma from "@/utils/connect";
import {NextResponse} from "next/server";

export const GET = async (req, {params}) => {
  const {slug} = params;
  try {
    const post = await prisma.post.update({
      where: {slug},
      data: {
        views: {
          increment: 1,
        },
      },
      include: {user: true},
    });
    return new NextResponse(JSON.stringify(post, {status: 200}));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({msg: "Something went wrong"}, {status: 500})
    );
  }
};

export const DELETE = async (req, {params}) => {
  const {slug: postSlug} = params;
  try {
    const deletePost = prisma.post.delete({
      where: {
        slug: postSlug,
      },
    });
    const deleteComments = prisma.comment.deleteMany({
      where: {
        postSlug,
      },
    });
    const transaction = await prisma.$transaction([deleteComments, deletePost]);
    console.log(transaction);
    return new NextResponse({msg: "Succesfully deleted", status: 200});
  } catch (error) {
    return new NextResponse({msg: "Something went wrong"});
  }
};
