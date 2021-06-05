import { Component } from "react";
//import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import isEmpty from "../../../helpers/isEmpty";

class ProfileItems extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div className="pros-card u-margin-top-medium">
        <div className="pros-card__img">
          <img
            src={profile.imgUrl || profile.avatar}
            alt=""
            className="pros-card__avatar"
          />
        </div>
        <div className="pros-card__details">
          <h3 className="pros-card__name"> {profile.username}</h3>
          <p className="pros-card__position">
            {profile.status}
            {isEmpty(profile.company) ? null : (
              <span> at {profile.company} </span>
            )}
          </p>
          <p className="pros-card__location">
            {isEmpty(profile.location) ? null : <span>{profile.location}</span>}
          </p>

          <Link
            to={`/profile/handle/${profile.handle}`}
            className="btn btn--pry pros-card__btn"
          >
            View Profile
          </Link>
        </div>
        <div className="pros-card__skills u-margin-top-medium">
          <h3 className="heading--sec pros-card__skills-head">Skill Set </h3>
          <ul className="pros-card__skills-list">
            {profile.skills.slice(0, 4).map((skill, index) => (
              <li key={index} className="pros-card__skills-item">
                {skill}
              </li>
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
