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
    const avatar = (
      //TODO: add Dashboard link
      <img
        src={user.avatar}
        alt=""
        className={styles.logout_img}
        title="you must have a gravitar connected to you email account"
      />
    );
    const dashboardLink = (
      <Link to="/dashboard" className={styles.ddlink}>
        Dashboard
      </Link>
    );
    const postFeeds = (
      <Link to="/feeds" className={styles.ddlink}>
        Post Feeds
      </Link>
    );
    const login = (
      <Link to="/login" className={styles.ddlink}>
        Sign in
      </Link>
    );
    const logout = (
      <a
        href="/"
        onClick={this.onClickLogout.bind(this)}
        className={styles.ddlink}
      >
        Signout
      </a>
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
          <div className={styles.userlinks}>
            {isAuthenticated ? postFeeds : null}
            {isAuthenticated ? dashboardLink : null}
            {isAuthenticated ? avatar : null}
            {isAuthenticated ? logout : null}
          </div>
          <div className={styles.dropdown}>
            {isAuthenticated ? avatar : <span>Menu</span>}
            <div className={styles.ddcontent}>
              <Link to="/pros" className={styles.ddlink}>
                Pros
              </Link>

              {isAuthenticated ? dashboardLink : null}
              {isAuthenticated ? postFeeds : null}
              {isAuthenticated ? logout : login}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  //clearCurrentUserProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {
  logoutUser,
  clearCurrentUserProfile,
})(Header);
