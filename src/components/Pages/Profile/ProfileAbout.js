import React, { Component } from "react";
//import PropTypes from "prop-types";
import isEmpty from "../../../helpers/isEmpty";

class ProfileAbout extends Component {
  render() {
    const { profile, user } = this.props;

    const firstname = user.firstname;
    const skills = profile.content.skills.map((skill, index) => (
      <div key={index}>{skill}</div>
    ));
    return (
      <div>
        <div>
          <h2>{firstname}'s Bio</h2>
          <p>
            {isEmpty(profile.content.bio) ? (
              <span>You have no bio</span>
            ) : (
              <span>{profile.content.bio}</span>
            )}
          </p>
        </div>
        <div>{skills}</div>
      </div>
    );
  }
}
export default ProfileAbout;
