import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Catgeory list</h1>
      <div className={styles.categories}>
        <Link
          className={`${styles.travel} ${styles.category}`}
          href="/blog?cat=style"
        >
          <Image
            alt=""
            src="/travel.png"
            width={32}
            height={32}
            className={styles.image}
          />
          Travel
        </Link>
        <Link
          className={`${styles.fashion} ${styles.category}`}
          href="/blog?cat=style"
        >
          <Image
            alt=""
            src="/fashion.png"
            width={32}
            height={32}
            className={styles.image}
          />
          Fashion
        </Link>
        <Link
          className={`${styles.culture} ${styles.category}`}
          href="/blog?cat=style"
        >
          <Image
            alt=""
            src="/culture.png"
            width={32}
            height={32}
            className={styles.image}
          />
          Culture
        </Link>
        <Link
          className={`${styles.food} ${styles.category}`}
          href="/blog?cat=style"
        >
          <Image
            alt=""
            src="/food.png"
            width={32}
            height={32}
            className={styles.image}
          />
          Food
        </Link>
        <Link
          className={`${styles.style} ${styles.category}`}
          href="/blog?cat=style"
        >
          <Image
            alt=""
            src="/style.png"
            width={32}
            height={32}
            className={styles.image}
          />
          Style
        </Link>
        <Link
          className={`${styles.coding} ${styles.category}`}
          href="/blog?cat=style"
        >
          <Image
            alt=""
            src="/coding.png"
            width={32}
            height={32}
            className={styles.image}
          />
          Coding
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
