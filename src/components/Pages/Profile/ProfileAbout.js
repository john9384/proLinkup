import React, { Component } from "react";
//import PropTypes from "prop-types";
import isEmpty from "../../../helpers/isEmpty";
import styles from "./Profile.module.css";

class ProfileAbout extends Component {
  render() {
    const { content } = this.props.profile;

    const skills = content.skills.map((skill, index) => (
      <li key={index}>{skill}</li>
    ));
    return (
      <div className={styles.profile__about}>
        <div className={styles.about__bio}>
          <h3>{content.username}'s Bio</h3>
          {isEmpty(content.bio) ? (
            <h4>You have no bio</h4>
          ) : (
            <p>{content.bio}</p>
          )}
        </div>
        <div className={styles.about__skills}>
          <h3>Skills Set</h3>
          <ul>{skills}</ul>
        </div>
      </div>
    );
  }
}
export default ProfileAbout;
