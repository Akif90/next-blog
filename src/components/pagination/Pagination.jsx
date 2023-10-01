import React from "react";
import styles from "./pagination.module.css";

const Pagination = () => {
  return (
    <div className={styles.container}>
      <button className={styles.btn}>Prev</button>
      <button className={styles.btn}>Next</button>
    </div>
  );
};

export default Pagination;
