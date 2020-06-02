import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";
import Spinner from "../../common/spinner/Spinner";
import { getProfiles } from "../../../redux/actions/profileActions";
import ProfileItems from "./ProfileItems";
import styles from "./Profiles.module.css";

class BasicProfiles extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }
  render() {
    const { profiles, loading } = this.props.profile;

    let allProfiles;
    let profileItems;

    if (profiles === null || loading) {
      profileItems = <Spinner />;
    } else {
      if (profiles.content.length > 0) {
        allProfiles = profiles.content;
        profileItems = allProfiles.map((profile) => (
          <ProfileItems key={profile._id} profile={profile} />
        ));
      } else {
        profileItems = <Spinner />;
      }
    }
    return (
      <div className={styles.main}>
        <h1 className={styles.main__title}> Pros Profiles</h1>
        <p className={styles.main__note}> Browse and connect with pros</p>
        {profileItems}
      </div>
    );
  }
}

BasicProfiles.propTypes = {
  profile: PropTypes.object.isRequired,
  getProfiles: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(BasicProfiles);
