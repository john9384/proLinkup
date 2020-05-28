import React, { Component } from "react";
//import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import isEmpty from "../../../helpers/isEmpty";
import styles from "./ProfileItems.module.css";

class ProfileItems extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div>
        <div>
          <img src={profile.user.avatar} alt="" className={styles.avatar} />
        </div>
        <div>
          <h3> {profile.user.name}</h3>
          <p>
            {profile.status}
            {isEmpty(profile.company) ? null : (
              <span> at {profile.company} </span>
            )}
          </p>
          <p>
            {isEmpty(profile.loacation) ? null : (
              <span>{profile.location}</span>
            )}
          </p>
          <Link to={`/profile/${profile.handle}`} className={styles.btn}>
            View Profile
          </Link>
        </div>
        <div>
          <h4>Skill Set </h4>
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
