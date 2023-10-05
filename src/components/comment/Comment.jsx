"use client";
import React, {useState} from "react";
import styles from "./comment.module.css";
import Link from "next/link";
import Image from "next/image";
import {useSession} from "next-auth/react";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }
  return data;
};
const Comment = ({postSlug}) => {
  const {status} = useSession();
  const [desc, setDesc] = useState("");
  const {data, mutate, isLoading} = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );
  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({desc, postSlug}),
    });
    mutate();
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="Write a comment..."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className={styles.input}
          ></textarea>
          <button className={styles.btn} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login</Link>
      )}

      <div className={styles.comments}>
        {isLoading
          ? "Loading"
          : data.map((item) => (
              <div key={item.id} className={styles.comment}>
                <div className={styles.user}>
                  {item?.user?.image && (
                    <Image
                      width={50}
                      height={50}
                      className={styles.image}
                      src={item.user.image}
                      alt=""
                    />
                  )}
                  <div className={styles.userInfo}>
                    <span className={styles.username}>{item?.user.name}</span>
                    <span className={styles.date}>
                      {item.createdAt.substring(0, 10)}
                    </span>
                  </div>
                </div>
                <div className={styles.desc}>{item.desc}</div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comment;
