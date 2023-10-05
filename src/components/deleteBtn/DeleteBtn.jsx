"use client";
import React from "react";
import styles from "./deleteBtn.module.css";
import {useRouter} from "next/navigation";

const DeleteBtn = ({slug}) => {
  const router = useRouter();
  const onDelete = async () => {
    const res = await fetch(`/api/posts/${slug}`, {
      method: "DELETE",
    });
    if (res.ok) router.push("/");
    else console.log("Error occured while deleting the post");
  };
  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default DeleteBtn;
