import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import Header from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";

class LandingPage extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  render() {
    return (
      <div className="landing">
        <Header />
        <div className="container">
          <div className="landing__main">
            <p className="landing__title"> Prolinkup </p>
            <p className="landing__note">
              Welcome to the social network for Pro 's.
            </p>
            <div className="u-margin-bottom-small">
              <Link to="/login" className="btn btn--pry">
                Sign in
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
LandingPage.propTypes = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(LandingPage);
