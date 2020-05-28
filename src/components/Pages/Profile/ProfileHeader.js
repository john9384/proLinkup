import React, { Component } from "react";
import isEmpty from "../../../helpers/isEmpty";

class ProfileHeader extends Component {
  render() {
    const { profile, user } = this.props;
    return (
      <div>
        <div>
          <img src={profile.content.avatar} alt="" />
        </div>
        <div>
          <p>
            {user.firstname} {user.lastname}
          </p>
          <p>
            {profile.content.status}
            {isEmpty(profile.content.company) ? null : (
              <span>at {profile.content.company}</span>
            )}
          </p>
          <p>
            {isEmpty(profile.content.location) ? null : (
              <span>{profile.content.location}</span>
            )}
          </p>
          {/* Todo: add the icons for social links and website */}
        </div>
      </div>
    );
  }
}
export default ProfileHeader;
