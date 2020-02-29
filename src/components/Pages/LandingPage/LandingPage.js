import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

import styles from "./LandingPage.module.css";

class LandingPage extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  render() {
    return (
      <main className={styles.main}>
        <div className={styles.wel}>
          <p className={styles.title}>proLinkUp</p>
          <p className={styles.note}>
            Welcome to the social network for the Pro's.
          </p>
          <button className={styles.btn}>
            {" "}
            <Link to="/login" className={styles.link}>
              Sign in
            </Link>
          </button>
          <button className={styles.btn}>
            <Link to="/sign_up" className={styles.link}>
              sign up
            </Link>
          </button>
        </div>
      </main>
    );
  }
}
LandingPage.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(LandingPage);
