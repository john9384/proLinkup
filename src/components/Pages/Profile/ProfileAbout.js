import React, { Component } from "react";
//import PropTypes from "prop-types";
import isEmpty from "../../../helpers/isEmpty";

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    const firstname = profile.user.name.trim().split(" ")[0];
    const skills = profile.skills.map((skill, index) => (
      <div key={index}>{skill}</div>
    ));
    return (
      <div>
        <div>
          <h2>{firstname}'s Bio</h2>
          <p>
            {isEmpty(profile.bio) ? (
              <span>You have no bio</span>
            ) : (
              <span>{profile.bio}</span>
            )}
          </p>
        </div>
        <div>{skills}</div>
      </div>
    );
  }
}
export default ProfileAbout;
