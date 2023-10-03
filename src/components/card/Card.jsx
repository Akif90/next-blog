import Image from "next/image";
import React from "react";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({key, item}) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src={item.img} alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{item.date}</span>
          <span className={styles.category}>{item.category}</span>
        </div>
        <Link href="/">
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur
          </h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          dolores porro error numquam, sed voluptatum
        </p>
        <Link href="/" className={styles.link}>
          Read More.
        </Link>
      </div>
    </div>
  );
};

export default Card;
