import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../../common/spinner/Spinner";
import { getProfiles } from "../../../redux/actions/profileActions";
import ProfileItems from "./ProfileItems";

class BasicProfiles extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }
  render() {
    const { profiles, loading } = this.props.profile;
    let profileItems;

    if (profiles === null || loading) {
      profileItems = <Spinner />;
    } else {
      if (profiles.length > 0) {
        profileItems = <h1>Profile goes here </h1>;
      } else {
        profileItems = profiles.map(profile => (
          <ProfileItems key={profile._id} profile={profile} />
        ));
      }
    }
    return (
      <div>
        <h1> Pros Profiles</h1>
        <p> Browse and connect with pros</p>
        {profileItems}
      </div>
    );
  }
}

BasicProfiles.propTypes = {
  profile: PropTypes.object.isRequired,
  getProfiles: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(BasicProfiles);
