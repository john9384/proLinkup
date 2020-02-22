import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <Link to="/" className={styles.title}>
        Prolinkup
      </Link>
    </div>
  );
}
