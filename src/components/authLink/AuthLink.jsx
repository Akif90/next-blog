import React from "react";
import styles from "./authLink.module.css";
import Link from "next/link";

const AuthLink = () => {
  const status = "unauthenticated";

  return (
    <div>
      {status === "unauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write </Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
    </div>
  );
};

export default AuthLink;
