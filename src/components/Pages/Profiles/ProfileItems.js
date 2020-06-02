import React, { Component } from "react";
//import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classnames from "classnames";
import isEmpty from "../../../helpers/isEmpty";
import styles from "./Profiles.module.css";

class ProfileItems extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div className={styles.profile}>
        <div className={styles.profile__img}>
          <img src={profile.avatar} alt="" className={styles.profile__avatar} />
        </div>
        <div className={styles.profile__intro}>
          <h3> {profile.username}</h3>
          <p>
            {profile.status}
            {isEmpty(profile.company) ? null : (
              <span> at {profile.company} </span>
            )}
          </p>
          <p>
            {isEmpty(profile.location) ? null : <span>{profile.location}</span>}
          </p>
          <button className={classnames("btn", styles.btn)}>
            <Link
              to={`/profile/handle/${profile.handle}`}
              className={styles.btn}
            >
              View Profile
            </Link>
          </button>
        </div>
        <div className={styles.profile__skills}>
          <h3>Skill Set </h3>
          <ul>
            {profile.skills.slice(0, 4).map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
ProfileItems.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItems;
