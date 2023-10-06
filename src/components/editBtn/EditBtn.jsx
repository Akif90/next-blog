"use client";
import React from "react";
import styles from "./editBtn.module.css";
import {useRouter} from "next/navigation";

const EditBtn = ({slug}) => {
  const router = useRouter();
  return (
    <div>
      <button
        className={styles.btn}
        onClick={() => router.push(`/write?slug=${slug}`)}
      >
        Edit
      </button>
    </div>
  );
};

export default EditBtn;
