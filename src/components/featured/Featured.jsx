import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Akif here! </b>
        Share your stories around the globe.
      </h1>
      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" className={styles.image} alt="" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            ducimus.
          </h1>
          <p className={styles.postDescription}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            distinctio, hic qui repellat ea pariatur repudiandae molestias iusto
            maxime quaerat nisi temporibus! Ipsum praesentium sit consequuntur
            laboriosam exercitationem voluptates nulla!
          </p>
          <button className={styles.postButton}>Read More.</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
