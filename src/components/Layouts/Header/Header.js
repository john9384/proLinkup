import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../../redux/actions/authActions";
import { clearCurrentUserProfile } from "../../../redux/actions/profileActions";

class Header extends Component {
  onClickLogout(e) {
    e.preventDefault();
    this.props.clearCurrentUserProfile();
    this.props.logoutUser();
    // this.props.history.push("/");
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <div>
        <a
          href="/"
          className={styles.logout}
          onClick={this.onClickLogout.bind(this)}
        >
          <img
            src={user.avatar}
            alt=""
            style={{
              width: "25px",
              margin: "0",
              borderRadius: "50%"
            }}
            title="you must have a gravitar connected to you email account"
          />
          <p>Logout</p>
        </a>
      </div>
    );
    return (
      <div className={styles.header}>
        <Link to="/" className={styles.title}>
          Prolinkup
        </Link>
        <div className={styles.navbar}>
          <div className={styles.pros_div}>
            <Link to="/pros" className={styles.pros}>
              Pros
            </Link>
          </div>
          {isAuthenticated ? authLinks : <div></div>}
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  //clearCurrentUserProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, {
  logoutUser,
  clearCurrentUserProfile
})(Header);
