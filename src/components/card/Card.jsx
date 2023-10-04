import Image from "next/image";
import React from "react";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({key, item}) => {
  return (
    <div className={styles.container} key={key}>
      {item.img && (
        <div className={styles.imageContainer}>
          <Image className={styles.image} src={item.img} alt="" fill />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/post/${item.slug}`}>
          <h1 className={styles.title}>{item.title}</h1>
        </Link>
        <p
          className={styles.desc}
          dangerouslySetInnerHTML={{__html: item?.desc}}
        ></p>
        <Link href={`/post/${item.slug}`} className={styles.link}>
          Read More.
        </Link>
      </div>
    </div>
  );
};

export default Card;
