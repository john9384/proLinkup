import { Component } from "react";
import isEmpty from "../../../helpers/isEmpty";

class ProfileHeader extends Component {
  render() {
    const { content } = this.props.profile;
    return (
      <div className="profile__header">
        <div className="profile__header-img">
          <img src={content.avatar} alt="" className="profile__header-avatar" />
        </div>
        <div className="profile__header-info u-margin-top-medium">
          <h3 className="profile__header-info--name">{content.username}</h3>
          <p className="profile__header-info--prof">
            {isEmpty(content.status) ? null : <span>{content.status} </span>}
            {isEmpty(content.company) ? null : (
              <span> at {content.company}</span>
            )}
          </p>
          <p className="profile__header-info--location">
            {isEmpty(content.location) ? null : <span>{content.location}</span>}
            {/* Todo: add the icons for social links and website */}
          </p>
        </div>
      </div>
    );
  }
}
export default ProfileHeader;
