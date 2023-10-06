import React from "react";
import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import Comment from "@/components/comment/Comment";
import DeleteBtn from "@/components/deleteBtn/DeleteBtn";
import {authSession} from "@/utils/auth";
import EditBtn from "@/components/editBtn/EditBtn";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failure");
  }

  return res.json();
};
const SinglePage = async ({params}) => {
  const {slug} = params;
  const userData = await authSession();
  let user;
  if (userData) user = userData.user;
  const data = await getData(slug);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            {data?.user?.img && (
              <div className={styles.userImageContainer}>
                <Image
                  src={data.user.image}
                  alt=""
                  fill
                  className={styles.avatar}
                />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user.name}</span>
              <span className={styles.date}>
                {data?.createdAt.substring(0, 10)}
              </span>
            </div>
          </div>
          {user?.email === data?.userEmail && (
            <div style={{display: "flex", gap: "10px"}}>
              <DeleteBtn slug={data.slug} />
              <EditBtn slug={slug} />
            </div>
          )}
        </div>

        {data?.img && (
          <div className={styles.imageContainer}>
            <Image src={data.img} alt="" fill className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.posts}>
          <div
            className={styles.desc}
            dangerouslySetInnerHTML={{__html: data?.desc}}
          ></div>
          <div className={styles.comment}>
            <Comment postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
