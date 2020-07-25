import React from "react";
import { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../../redux/actions/authActions";
import { clearCurrentUserProfile } from "../../../redux/actions/profileActions";
import logo from "../../../assets/img/logo3.PNG";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
  onClickLogout(e) {
    e.preventDefault();
    this.props.clearCurrentUserProfile();
    this.props.logoutUser();
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
    const home = (
      <Link to="/" className="header__dropdown--link">
        <i className="fa fa-home"></i>
        <span className="">Home</span>
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
        className="header__nav--links"
      >
        Signout
      </a>
    );
    const users_links = (
      <Link to="/pros" className="header__nav--links">
        Pros
      </Link>
    );
    return (
      <div className="header">
        <Link to="/" className="header__title">
          <img src={logo} className="header__logo" />
          <span>Prolinkup</span>
        </Link>

        <nav className="header__nav">
          {isAuthenticated ? home : null}
          {isAuthenticated ? postFeeds : null}
          <div className="header__dropdown">
            {isAuthenticated ? avatar : null}
            <div className="header__dropdown--content">
              {isAuthenticated ? avatar : null}
              {isAuthenticated ? logout : null}
            </div>
          </div>
        </nav>

        <div class="nav-mobile">
          <input
            type="checkbox"
            class="nav-mobile__checkbox"
            id="nav-mobile-toggle"
          />
          <label for="nav-mobile-toggle" class="nav-mobile__btn">
            <span class="nav-mobile__icon">&nbsp;</span>
          </label>
          <div class="nav-mobile__bg">&nbsp;</div>
          <nav class="nav-mobile__menu">
            <ul class="nav-mobile__list">
              <li class="nav-mobile__items">
                <a href="#" class="nav-mobile__link">
                  About Us
                </a>
              </li>
              <li class="nav-mobile__items">
                <a href="#" class="nav-mobile__link">
                  Services
                </a>
              </li>
              <li class="nav-mobile__items">
                <a href="#" class="nav-mobile__link">
                  Popular
                </a>
              </li>
              <li class="nav-mobile__items">
                <a href="#" class="nav-mobile__link">
                  Stories
                </a>
              </li>
              <li class="nav-mobile__items">
                <a href="#" class="nav-mobile__link">
                  Booking
                </a>
              </li>
            </ul>
          </nav>
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
