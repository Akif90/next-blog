import React from "react";
import styles from "./comment.module.css";
import Link from "next/link";
import Image from "next/image";

const Comment = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="Write a comment"
            className={styles.input}
          ></textarea>
          <button className={styles.btn}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login</Link>
      )}

      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              width={50}
              height={50}
              className={styles.image}
              src="/p1.jpeg"
              alt=""
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Dank Koe</span>
              <span className={styles.date}>12.03.12</span>
            </div>
          </div>
          <div className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex facere
            libero sit! Enim animi et, reiciendis non adipisci, eaque unde
            corporis earum reprehenderit quam officia accusantium est voluptas
            ullam eius.
          </div>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              width={50}
              height={50}
              className={styles.image}
              src="/p1.jpeg"
              alt=""
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Dank Koe</span>
              <span className={styles.date}>12.03.12</span>
            </div>
          </div>
          <div className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex facere
            libero sit! Enim animi et, reiciendis non adipisci, eaque unde
            corporis earum reprehenderit quam officia accusantium est voluptas
            ullam eius.
          </div>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              width={50}
              height={50}
              className={styles.image}
              src="/p1.jpeg"
              alt=""
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Dank Koe</span>
              <span className={styles.date}>12.03.12</span>
            </div>
          </div>
          <div className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex facere
            libero sit! Enim animi et, reiciendis non adipisci, eaque unde
            corporis earum reprehenderit quam officia accusantium est voluptas
            ullam eius.
          </div>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              width={50}
              height={50}
              className={styles.image}
              src="/p1.jpeg"
              alt=""
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Dank Koe</span>
              <span className={styles.date}>12.03.12</span>
            </div>
          </div>
          <div className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex facere
            libero sit! Enim animi et, reiciendis non adipisci, eaque unde
            corporis earum reprehenderit quam officia accusantium est voluptas
            ullam eius.
          </div>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              width={50}
              height={50}
              className={styles.image}
              src="/p1.jpeg"
              alt=""
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Dank Koe</span>
              <span className={styles.date}>12.03.12</span>
            </div>
          </div>
          <div className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex facere
            libero sit! Enim animi et, reiciendis non adipisci, eaque unde
            corporis earum reprehenderit quam officia accusantium est voluptas
            ullam eius.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
