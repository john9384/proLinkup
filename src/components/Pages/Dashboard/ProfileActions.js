import React from "react";
import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css";

const ProfileActions = () => {
  return (
    <div className={styles.profileActions}>
      <button className={styles.pa__btn}>
        <span>+</span>
        <Link to="/edit-profile">Edit Profile</Link>
      </button>
      <button className={styles.pa__btn}>
        <span>+</span>
        <Link to="/add-experience">Add Exp</Link>
      </button>
      <button className={styles.pa__btn}>
        <span>+</span>
        <Link to="/add-education">Add Edu</Link>
      </button>
    </div>
  );
};
export default ProfileActions;
