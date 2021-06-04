import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProfileHeader from "./ProfileHeader";
import ProfileAbout from "./ProfileAbout";
import ProfileCreds from "./ProfileCreds";
//import ProfileGithub from "./ProfileGithub";
import Spinner from "../../common/spinner/Spinner";
import SideNav from "../../Layouts/SideNav/SideNav";
import {
  getProfileByHandle,
  getProfileById,
} from "../../../redux/actions/profileActions";
import isEmpty from "../../../helpers/isEmpty";

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    } else if (this.props.match.params.id) {
      this.props.getProfileById(this.props.match.params.id);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.profile === null) {
      this.props.history.push("/not-found");
    }
  }
  render() {
    const { profile, loading } = this.props.profile;
    let profileContent;
    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
        <div className="col-2-of-3 profile">
          <ProfileHeader profile={profile} />
          <ProfileAbout profile={profile} />
          <ProfileCreds
            education={profile.content.education}
            experience={profile.content.experience}
          />
        </div>
      );
    }
    return (
      <div className="row">
        {profileContent}
        <SideNav />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile,
});
Profile.propTypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};
export default connect(mapStateToProps, {
  getProfileByHandle,
  getProfileById,
})(Profile);
