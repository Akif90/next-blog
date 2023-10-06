"use client";
import React, {useEffect, useState} from "react";
import styles from "./writePage.module.css";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import {useSession} from "next-auth/react";
import {useRouter, useSearchParams} from "next/navigation";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "@/utils/firebase";
import useSWR from "swr";

const storage = getStorage(app);
const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }
  return data;
};
const Write = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");
  const {data, mutate, isLoading} = useSWR(
    `http://localhost:3000/api/posts/${slug}`,
    fetcher
  );
  const {status} = useSession();
  const [open, setOpen] = useState(false);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState(data?.desc);
  const [title, setTitle] = useState(data?.title);
  const [file, setFile] = useState(null);
  const [catSlug, setCatSlug] = useState("");
  useEffect(() => {
    const upload = () => {
      const name = new Date().getTime + file.name;
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
            case "running":
              console.log("Upload is paused");
              break;
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          switch (error.code) {
            case "storage/unauthorized":
              break;
            case "storage/canceled":
              break;

            case "storage/unknown":
              break;
          }
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = fetch(`/api/posts?slug=${data?.slug}`, {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "style",
      }),
    });
    router.push("/");
  };
  if (status === "loading")
    return <div className={styles.loading}>Loading...</div>;

  if (status === "unauthenticated") router.push("/");

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.input}
      />
      <select
        className={styles.select}
        onChange={(e) => setCatSlug(e.target.value)}
      >
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className={styles.editor}>
        <button onClick={() => setOpen(!open)} className={styles.btn}>
          <Image src="/plus.svg" alt="" width={40} height={40} />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{display: "none"}}
            />
            <button className={styles.addBtn}>
              <label htmlFor="image">
                <Image src="/image.svg" alt="" width={40} height={40} />
              </label>
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
      <button onClick={handleSubmit} className={styles.postBtn}>
        Post
      </button>
    </div>
  );
};

export default Write;
