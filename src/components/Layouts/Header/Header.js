import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../../redux/actions/authActions";
import { clearCurrentUserProfile } from "../../../redux/actions/profileActions";
import logo from "../../../assets/img/logo3.PNG";

//fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faCog,
  faHome,
  faRss,
  faSignOutAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
class Header extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      errors: {},
      dropdown: false,
    };
  }
  componentDidMount() {
    this.setState({
      dropdown: false,
    });
  }

  onClickLogout(e) {
    e.preventDefault();
    this.props.clearCurrentUserProfile();
    this.props.logoutUser();
  }
  onClickToggleDropdown(e) {
    e.preventDefault();
    this.setState({
      dropdown: !this.state.dropdown,
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
      <Link to="/" className="nav__item nav-mobile__item">
        <span className="nav__icon">
          <FontAwesomeIcon icon={faHome} />
        </span>
        <span className="nav__text">Home</span>
      </Link>
    );
    const dashboard = (
      <Link to="/" className="nav__item nav-mobile__item">
        <span className="nav__icon">
          <FontAwesomeIcon icon={faCog} />
        </span>
        <span className="nav__text">Settings</span>
      </Link>
    );
    const profileLInk = (
      <Link to="/" className="nav__item nav-mobile__item">
        <span className="nav__icon">
          <FontAwesomeIcon icon={faUser} />
        </span>
        <span className="nav__text">Profile</span>
      </Link>
    );
    const usersLinks = (
      <Link to="/pros" className="nav__item nav-mobile__item">
        <span className="nav__icon">
          <FontAwesomeIcon icon={faAddressCard} />
        </span>
        <span className="nav__text">Pros</span>
      </Link>
    );
    const postFeeds = (
      <Link to="/feeds" className="nav__item nav-mobile__item">
        <span className="nav__icon">
          <FontAwesomeIcon icon={faRss} />
        </span>
        <span className="nav__text">Feeds</span>
      </Link>
    );
    const userMenu = (
      <div
        className="nav__item nav-mobile__item"
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
        className="nav__item dropdown__signout nav-mobile__item"
      >
        <span className="nav__icon">
          <FontAwesomeIcon icon={faSignOutAlt} />
        </span>

        <span className="nav__text">Signout</span>
      </a>
    );
    const mobileNav = (
      <div className="nav-mobile">
        <input
          type="checkbox"
          className="nav-mobile__checkbox"
          id="nav-mobile-toggle"
        />
        <label htmlFor="nav-mobile-toggle" className="nav-mobile__btn">
          <span className="nav-mobile__icon">&nbsp;</span>
        </label>
        <nav className="animate__animated animate__fadeIn nav-mobile__menu">
          <ul className="nav-mobile__list">
            <li>{home}</li>
            <li>{usersLinks}</li>
            <li>{postFeeds}</li>
            <li>{profileLInk}</li>
            <li>{dashboard}</li>
            <li>{logout}</li>
          </ul>
        </nav>
      </div>
    );
    const desktopDropdown = (
      <div className="animate__animated animate__fadeIn dropdown">
        <div className="dropdown__title-box">
          {avatar}
          <span className="heading-pry dropdown__name">
            {firstname} {lastname}
          </span>
        </div>
        <ul className="dropdown__content">
          <li className="dropdown__item">{dashboard}</li>
          <li className="dropdown__item">{logout}</li>
        </ul>
      </div>
    );
    return (
      <div className="header">
        <div className="container">
          <Link to="/" className="header__title">
            <img src={logo} alt="logo" className="header__logo" />
            <span>Prolinkup</span>
          </Link>
          {isAuthenticated ? (
            <nav className="nav">
              {home}
              {usersLinks}
              {postFeeds}
              {userMenu}

              {!this.state.dropdown ? null : desktopDropdown}
            </nav>
          ) : null}
          {!isAuthenticated ? null : mobileNav}
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  clearCurrentUserProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {
  logoutUser,
  clearCurrentUserProfile,
})(Header);
