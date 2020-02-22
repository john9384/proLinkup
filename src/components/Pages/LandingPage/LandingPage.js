import React from "react";
import { Link } from "react-router-dom";

import styles from "./LandingPage.module.css";

function LandingPage() {
  return (
    <main className={styles.main}>
      <div className={styles.wel}>
        <p className={styles.title}>proLinkUp</p>
        <p className={styles.note}>
          Welcome to the social network for the Pro's.
        </p>
        <button className={styles.btn}>
          {" "}
          <Link to="/login" className={styles.link}>
            Sign in
          </Link>
        </button>
        <button className={styles.btn}>
          <Link to="/sign_up" className={styles.link}>
            sign up
          </Link>
        </button>
      </div>
    </main>
  );
}
export default LandingPage;
