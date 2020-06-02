import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getCurrentProfile,
  deleteAccount,
} from "../../../redux/actions/profileActions";
import Spinner from "../../common/spinner/Spinner";
import styles from "./Dashboard.module.css";
import ProfileActions from "./ProfileActions";
import ExpCard from "./ExpCard";
import EduCard from "./EduCard";
import Profile from "../Profile/Profile";
//import Profile from "../Profiles/ProfileItems";

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
          <div className>
            <h1 className={styles.h1}>Dashboard</h1>
            <h1>
              Welcome {firstname} {lastname}
            </h1>
            <p styl>You have no profile yet</p>
            <Link to="/create-profile">
              <button className="btn">Create Profile</button>
            </Link>
          </div>
        );
      } else {
        dashboardContent = (
          <div>
            <h1 className={styles.h1}>Dashboard</h1>
            <p>
              Welcome{" "}
              <Link
                to={`/profile/handle/${profile.content.handle}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {firstname} {lastname}
              </Link>
            </p>
            <div className={styles.profileActions}>
              <ProfileActions />
            </div>
            <div className={styles.skills}>
              <h2>Skills</h2>
            </div>
            <ExpCard experience={profile.content.experience} />
            <EduCard education={profile.content.education} />
            <div style={{ marginBottom: "10px" }}></div>
            <button
              onClick={this.onDeleteClick.bind(this)}
              className="btn-danger"
            >
              Delete Account
            </button>
          </div>
        );
      }
    }
    return <div className={styles.dashboard}>{dashboardContent}</div>;
  }
}
const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};
export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
