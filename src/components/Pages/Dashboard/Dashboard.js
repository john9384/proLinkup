import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getCurrentProfile,
  deleteAccount
} from "../../../redux/actions/profileActions";
import Spinner from "../../common/spinner/Spinner";
import ProfileActions from "./ProfileActions";
import ExpCard from "./ExpCard";
import EduCard from "./EduCard";
import SideNav from "../../Layouts/SideNav/SideNav";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  onDeleteClick(e) {
    this.props.deleteAccount();
  }
  render() {
    const { firstname, lastname, avatar } = this.props.auth.user.payload;
    const { profile, loading } = this.props.profile;
    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      if (Object.keys(profile).length <= 0) {
        dashboardContent = (
          <div className="col-2-of-3 dashboard">
            <div className="dashboard__no-profile u-center-text">
              <h2 className="dashboard__wel-note u-margin-top-large">
                Welcome {firstname} {lastname}
              </h2>
              <p className="dashboard__text u-margin-top-smaller">
                You have no profile yet
              </p>
              <Link
                to="/create-profile"
                className="btn btn--pry  u-margin-top-smaller"
              >
                Create Profile
              </Link>
            </div>
          </div>
        );
      } else {
        dashboardContent = (
          <div className="col-2-of-3 dashboard">
            <h1 className=" heading--pry dashboard__title">Dashboard</h1>
            <div className=" u-margin-bottom-medium">
              <p className="dashboard__name">
                Welcome {firstname} {lastname}
              </p>
              {profile.content.handle ? (
                <div>
                  <Link
                    to={`/profile/${this.props.auth.user.payload.id}`}
                    className="dashboard__handle u-margin-top-smaller"
                  >
                    @{profile.content.handle}
                  </Link>
                </div>
              ) : null}
              <div>
                <Link
                  to={`/profile/${this.props.auth.user.payload.id}`}
                  className="btn btn--pry  u-margin-top-small"
                >
                  View Profile
                </Link>
              </div>
            </div>

            <ProfileActions />
            <ExpCard experience={profile.content.experience} />
            <EduCard education={profile.content.education} />
            <button
              onClick={this.onDeleteClick.bind(this)}
              className="btn btn--danger u-margin-bottom-large"
            >
              Delete Account
            </button>
          </div>
        );
      }
    }
    return (
      <div className="row">
        {dashboardContent} <SideNav />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};
export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
