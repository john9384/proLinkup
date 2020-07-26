import React from "react";
import { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../../redux/actions/authActions";
import { clearCurrentUserProfile } from "../../../redux/actions/profileActions";
import logo from "../../../assets/img/logo3.PNG";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      errors: {},
      dropdown: false
    };
  }
  onClickLogout(e) {
    e.preventDefault();
    this.props.clearCurrentUserProfile();
    this.props.logoutUser();
  }
  onClickToggleDropdown(e) {
    e.preventDefault();
    this.setState({
      dropdown: !this.state.dropdown
    });
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    let firstname, lastname;
    if (isAuthenticated) {
      firstname = user.payload.firstname;
      lastname = user.payload.lastname;
    }

    const avatar = (
      <img
        src={user.avatar}
        alt=""
        className="dropdown__avatar"
        title="you must have a gravitar connected to you email account"
      />
    );
    const home = (
      <Link to="/" className="nav__item">
        <i className="fa fa-home nav__icon" aria-hidden="true"></i>
        <span className="nav__text">Home</span>
      </Link>
    );
    const usersLinks = (
      <Link to="/pros" className="nav__item">
        <i className="fa fa-address-card-o nav__icon" aria-hidden="true"></i>
        <span className="nav__text">Pros</span>
      </Link>
    );
    const postFeeds = (
      <Link to="/feeds" className="nav__item">
        <i className="fa fa-feed nav__icon" aria-hidden="true"></i>
        <span className="nav__text">Feeds</span>
      </Link>
    );
    const userMenu = (
      <div
        className="nav__item"
        onClick={this.onClickToggleDropdown.bind(this)}
      >
        <i className="fa fa-th nav__icon" aria-hidden="true"></i>
        <span className="nav__text">User</span>
      </div>
    );
    const logout = (
      <a
        href="/"
        onClick={this.onClickLogout.bind(this)}
        className="dropdown__signout"
      >
        Signout
      </a>
    );

    return (
      <div className="header">
        <Link to="/" className="header__title">
          <img src={logo} className="header__logo" />
          <span>Prolinkup</span>
        </Link>
        {isAuthenticated ? (
          <nav className="nav">
            {home}
            {usersLinks}
            {postFeeds}
            {userMenu}

            {!this.state.dropdown ? null : (
              <div className="dropdown">
                <div className="dropdown__title-box">
                  {avatar}
                  <h1 className="heading-pry dropdown__name">
                    {firstname} {lastname}
                  </h1>
                  <i
                    className="fa fa-times dropdown__close"
                    aria-hidden="true"
                    onClick={this.onClickToggleDropdown.bind(this)}
                  ></i>
                  <ul className="dropdown__content">
                    <li className="dropdown__item">Profile</li>
                    <li className="dropdown__item">Dahboard</li>
                    <li className="dropdown__item">{logout}</li>
                  </ul>
                </div>
              </div>
            )}
          </nav>
        ) : null}
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
