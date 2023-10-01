import Link from "next/link";
import React from "react";
import styles from "./menuCategory.module.css";
const MenuCategory = () => {
  return (
    <div className={styles.categoryList}>
      <Link href="/" className={`${styles.category} ${styles.food}`}>
        Food
      </Link>
      <Link href="/" className={`${styles.category} ${styles.coding}`}>
        Coding
      </Link>
      <Link href="/" className={`${styles.category} ${styles.fashion}`}>
        Fashion
      </Link>
      <Link href="/" className={`${styles.category} ${styles.travel}`}>
        Travel
      </Link>
    </div>
  );
};

export default MenuCategory;
