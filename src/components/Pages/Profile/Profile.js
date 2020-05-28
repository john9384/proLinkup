import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";
import ProfileAbout from "./ProfileAbout";
import ProfileCreds from "./ProfileCreds";
//import ProfileGithub from "./ProfileGithub";
import Spinner from "../../common/spinner/Spinner";
import { getProfileByHandle } from "../../../redux/actions/profileActions";

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }
  render() {
    const { profile, loading } = this.props.profile;
    const { user } = this.props.auth;
    let profileContent;
    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
        <div>
          <Link to="/profiles" className="btn">
            Back to profiles
          </Link>
          <div>
            <ProfileHeader profile={profile} user={user.payload} />
            <ProfileAbout profile={profile} user={user.payload} />
            {/* <ProfileCreds
              education={profile.content.education}
              experience={profile.content.experience}
            /> */}
          </div>
        </div>
      );
    }
    return <div>{profileContent}</div>;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});
Profile.propTypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};
export default connect(mapStateToProps, { getProfileByHandle })(Profile);
