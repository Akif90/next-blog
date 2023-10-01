import React from "react";
import styles from "./menuPost.module.css";
import Link from "next/link";
import Image from "next/image";
const MenuPosts = ({withImage}) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" fill alt="" className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Username</span>
            <span className={styles.date}> - 12.02.23</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" fill alt="" className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Username</span>
            <span className={styles.date}> - 12.02.23</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" fill alt="" className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.coding}`}>Coding</span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Username</span>
            <span className={styles.date}> - 12.02.23</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" fill alt="" className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Username</span>
            <span className={styles.date}> - 12.02.23</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
