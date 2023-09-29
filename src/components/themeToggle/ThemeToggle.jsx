"use client";
import React, {useContext} from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import {ThemeContext} from "@/context/ThemeContext";

const ThemeToggle = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <div
      className={styles.container}
      style={theme === "dark" ? {background: "white"} : {background: "#0f172a"}}
      onClick={toggleTheme}
    >
      <Image src="/moon.png" width={24} alt="" height={24} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? {right: 1, background: "#0f172a"}
            : {left: 1, background: "white"}
        }
      ></div>
      <Image src="/sun.png" width={24} alt="" height={24} />
    </div>
  );
};

export default ThemeToggle;
