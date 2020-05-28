import React from "react";
import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css";

const ProfileActions = () => {
  return (
    <div className={styles.profileActions}>
      <button className={styles.btn}>
        <Link to="/edit-profile">Edit Profile</Link>
      </button>
      <button className={styles.btn}>
        <Link to="/add-experience">Add Experience</Link>
      </button>
      <button className={styles.btn}>
        <Link to="/add-education">Add Education</Link>
      </button>
    </div>
  );
};
export default ProfileActions;
