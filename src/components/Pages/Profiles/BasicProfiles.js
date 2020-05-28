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
        console.log("else statement", profiles);
      }
    }
    return (
      <div className="container">
        <h1 className="container__title"> Pros Profiles</h1>
        <p className="container__note"> Browse and connect with pros</p>
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
