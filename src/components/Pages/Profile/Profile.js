import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";
import ProfileAbout from "./ProfileAbout";
import ProfileCreds from "./ProfileCreds";
//import ProfileGithub from "./ProfileGithub";
import Spinner from "../../common/spinner/Spinner";
import classnames from "classnames";
import styles from "./Profile.module.css";
import {
  getProfileByHandle,
  getProfileById
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
    if (isEmpty(nextProps.profile.profile) && this.props.profile.loading) {
      this.props.history.push("/err-page");
    }
  }
  render() {
    const { profile, loading } = this.props.profile;
    console.log(profile);
    let profileContent;
    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
        <div>
          <button className={classnames("btn", styles.btn)}>
            <Link to="/pros">Back</Link>
          </button>

          <div className={styles.main__content}>
            <ProfileHeader profile={profile} />
            <ProfileAbout profile={profile} />
            <ProfileCreds
              education={profile.content.education}
              experience={profile.content.experience}
            />
          </div>
        </div>
      );
    }
    return <div className={styles.main}>{profileContent}</div>;
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});
Profile.propTypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};
export default connect(mapStateToProps, {
  getProfileByHandle,
  getProfileById
})(Profile);
