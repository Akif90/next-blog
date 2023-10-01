import Image from "next/image";
import React from "react";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src="/p1.jpeg" alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.23 - </span>
          <span className={styles.category}>Culture</span>
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
