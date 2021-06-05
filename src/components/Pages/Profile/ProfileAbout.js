import { Component } from "react";
//import PropTypes from "prop-types";
import isEmpty from "../../../helpers/isEmpty";

class ProfileAbout extends Component {
  render() {
    const { content } = this.props.profile;

    const skills = content.skills.map((skill, index) => (
      <li key={index} className="profile__skill-item">
        {skill}
      </li>
    ));
    return (
      <div className="profile__about">
        <div className="profile__bio">
          <h3 className=" profile__bio-head u-margin-bottom-small u-margin-top-medium">
            {content.username}'s Bio
          </h3>
          {isEmpty(content.bio) ? (
            <h4>You have no bio</h4>
          ) : (
            <p>{content.bio}</p>
          )}
        </div>
        <div className="profile__skills u-margin-top-medium">
          <h3 className="profile__skills-head">Skills Set</h3>
          <ul className="profile__skills-list">{skills}</ul>
        </div>
      </div>
    );
  }
}

export default ProfileAbout;
