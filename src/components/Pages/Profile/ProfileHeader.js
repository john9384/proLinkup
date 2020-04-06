import React, { Component } from "react";
import isEmpty from "../../../helpers/isEmpty";

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div>
        <div>
          <img src={profile.user.avatar} alt="" />
        </div>
        <div>
          <p>{profile.user.name}</p>
          <p>
            {profile.status}
            {isEmpty(profile.company) ? null : (
              <span>at {profile.company}</span>
            )}
          </p>
          <p>
            {isEmpty(profile.location) ? null : <span>{profile.location}</span>}
          </p>
          {/* Todo: add the icons for social links and website */}
        </div>
      </div>
    );
  }
}
export default ProfileHeader;
