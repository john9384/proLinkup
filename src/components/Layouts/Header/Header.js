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
      <div className={styles.logout}>
        <img
          src={user.avatar}
          alt=""
          className={styles.logout_img}
          title="you must have a gravitar connected to you email account"
        />
        <a
          href="/"
          onClick={this.onClickLogout.bind(this)}
          className={styles.logout_a}
        >
          Logout
        </a>
      </div>
    );
    return (
      <div className={styles.header}>
        <Link to="/" className={styles.title}>
          Prolinkup
        </Link>
        <div className={styles.navbar}>
          <Link to="/pros" className={styles.pros}>
            Pros
          </Link>
          {isAuthenticated ? authLinks : null}
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
