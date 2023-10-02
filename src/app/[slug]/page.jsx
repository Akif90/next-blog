import React from "react";
import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";
import Image from "next/image";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta,
            ducimus.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Dank Koe</span>
              <span className={styles.date}>21.04.21</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.posts}>
          <div className={styles.desc}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              maxime aliquam, molestiae dicta possimus voluptas incidunt hic
              voluptates! Repellendus debitis facere natus distinctio officia
              vitae ducimus nisi laudantium? Omnis, maxime! Ea officiis
              voluptatibus amet, ipsum voluptate suscipit accusamus deleniti ut.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              maxime aliquam, molestiae dicta possimus voluptas incidunt hic
              voluptates! Repellendus debitis facere natus distinctio officia
              vitae ducimus nisi laudantium? Omnis, maxime! Ea officiis
              voluptatibus amet, ipsum voluptate suscipit accusamus deleniti ut.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              maxime aliquam, molestiae dicta possimus voluptas incidunt hic
              voluptates! Repellendus debitis facere natus distinctio officia
              vitae ducimus nisi laudantium? Omnis, maxime! Ea officiis
              voluptatibus amet, ipsum voluptate suscipit accusamus deleniti ut.
            </p>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
