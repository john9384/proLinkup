import React, { Component } from "react";
import PropTypes from "prop-types";
//import { classnames } from "classnames";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import styles from "./Signup.module.css";
import { connect } from "react-redux";
import { signupUser } from "../../redux/actions/authActions";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      password: "",
      password2: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.signupUser(newUser, this.props.history);
  }

  render() {
    // const { errors } = this.state;
    return (
      <main className={styles.main}>
        <div className={styles.signup}>
          <h2 className={styles.h2}>New User SignUp</h2>
          <form onSubmit={this.onSubmit}>
            <input
              className={styles.input}
              type="text"
              placeholder="Firstname"
              name="firstname"
              value={this.state.firstname}
              onChange={this.onChange}
            />
            <br />
            <input
              className={styles.input}
              type="text"
              placeholder="Lastname"
              name="lastname"
              value={this.state.lastname}
              onChange={this.onChange}
            />

            <br />
            <input
              className={styles.input}
              type="email"
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
            />

            <br />
            <input
              className={styles.input}
              type="tel"
              placeholder="Phone number"
              name="phone"
              value={this.state.phone}
              onChange={this.onChange}
            />

            <br />
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
            <br />
            <input
              className={styles.input}
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={this.state.password2}
              onChange={this.onChange}
            />
            <br />
            <button className={styles.btn} name="btn">
              Submit
            </button>
            <Link to="/login" className={(styles.p, styles.link)}>
              Already a member,sign in
            </Link>
          </form>
        </div>
      </main>
    );
  }
}
SignUp.propTypes = {
  signupUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProp = state => ({
  auth: state.auth,
  err: state.errors
});

export default connect(mapStateToProp, { signupUser })(withRouter(SignUp));
