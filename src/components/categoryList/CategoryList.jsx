import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failure");
  }

  return res.json();
};
const CategoryList = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Catgeory list</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            className={`${styles[item.slug]} ${styles.category}`}
            href={`/blog?cat=${item.slug}`}
            key={item.id}
          >
            {item.img && (
              <Image
                alt=""
                src={item.img}
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
