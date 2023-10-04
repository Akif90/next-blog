"use client";
import React, {useState} from "react";
import styles from "./writePage.module.css";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";

const Write = () => {
  const {data, status} = useSession();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  if (status === "loading")
    return <div className={styles.loading}>Loading...</div>;

  if (status === "unauthenticated") router.push("/");

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />
      <div className={styles.editor}>
        <button onClick={() => setOpen(!open)} className={styles.btn}>
          <Image src="/plus.svg" alt="" width={40} height={40} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addBtn}>
              <Image src="/image.svg" alt="" width={40} height={40} />
            </button>

            <button className={styles.addBtn}>
              <Image src="/video.svg" alt="" width={40} height={40} />
            </button>
          </div>
        )}
        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          className={styles.textArea}
          placeholder="Tell your stories"
        />
      </div>
      <button className={styles.postBtn}>Post</button>
    </div>
  );
};

export default Write;
