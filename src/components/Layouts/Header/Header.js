import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../../redux/actions/authActions";
import { clearCurrentUserProfile } from "../../../redux/actions/profileActions";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends Component {
  onClickLogout(e) {
    e.preventDefault();
    this.props.clearCurrentUserProfile();
    this.props.logoutUser();
    this.props.history.push("/");
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const avatar = (
      <img
        src={user.avatar}
        alt=""
        className="logout__img"
        title="you must have a gravitar connected to you email account"
      />
    );
    const dashboardLink = (
      <Link to="/dashboard" className="header__dropdown--link">
        Dashboard
      </Link>
    );
    const postFeeds = (
      <Link to="/feeds" className="header__dropdown--link">
        Post Feeds
      </Link>
    );
    const login = (
      <Link to="/login" className="header__dropdown--link">
        Sign in
      </Link>
    );
    const logout = (
      <a
        href="/"
        onClick={this.onClickLogout.bind(this)}
        className="header__dropdown--link"
      >
        Signout
      </a>
    );
    return (
      <div className="header">
        <Link to="/" className="header__title">
          ProLinkup
        </Link>
        <div className="header__nav">
          <div className="header__dropdown">
            {isAuthenticated ? avatar : <span> Menu </span>}
            <div className="header__dropdown--content">
              <Link to="/" className="header__dropdown--link">
                <i className="fa fa-home"></i>
              </Link>
              <Link to="/pros" className="header__dropdown--link">
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
  clearCurrentUserProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, {
  logoutUser,
  clearCurrentUserProfile
})(Header);
