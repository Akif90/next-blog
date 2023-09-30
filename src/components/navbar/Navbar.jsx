import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLink from "../authLink/AuthLink";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook icon" width={24} height={24} />
        <Image
          src="/instagram.png"
          alt="instagram icon"
          width={24}
          height={24}
        />
        <Image src="/tiktok.png" alt="tiktok icon" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube icon" width={24} height={24} />
      </div>
      <div className={styles.logo}>Writers Club</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="/contact">
          Contact
        </Link>
        <Link className={styles.link} href="/about">
          About
        </Link>
        <AuthLink />
      </div>
    </div>
  );
};

export default Navbar;
