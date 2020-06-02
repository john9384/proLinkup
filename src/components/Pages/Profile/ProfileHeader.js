import React, { Component } from "react";
import isEmpty from "../../../helpers/isEmpty";
import styles from "./Profile.module.css";

class ProfileHeader extends Component {
  render() {
    const { content } = this.props.profile;
    return (
      <div className={styles.profile__header}>
        <div className={styles.header__img}>
          <img src={content.avatar} alt="" className={styles.header__avatar} />
        </div>
        <div className={styles.header__basic}>
          {" "}
          <h3>{content.username}</h3>
          <p>
            {isEmpty(content.status) ? null : <span>{content.status} </span>}
            {isEmpty(content.company) ? null : (
              <span> at {content.company}</span>
            )}
          </p>
          <p>
            {isEmpty(content.location) ? null : <span>{content.location}</span>}
            {/* Todo: add the icons for social links and website */}
          </p>
        </div>
      </div>
    );
  }
}
export default ProfileHeader;
