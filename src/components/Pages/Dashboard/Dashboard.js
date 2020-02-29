import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../../redux/actions/profileActions";
import Spinner from "../../common/spinner/Spinner";
import styles from "./Dashboard.module.css";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      if (Object.keys(profile).length <= 0) {
        dashboardContent = (
          <div style={{ textAlign: "center" }}>
            <h1>
              Welcome {user.firstname} {user.lastname}
            </h1>
            <p className="lead text-muted">You have no profile yet</p>
            <Link to="/create-profile">
              <button className="btn">Create Profile</button>
            </Link>
          </div>
        );
      } else {
        dashboardContent = <h2>Hellow still works</h2>;
      }
    }
    return <div className={styles.dashboard}>{dashboardContent}</div>;
  }
}
const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};
export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
