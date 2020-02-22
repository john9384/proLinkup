import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const currentUser = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(currentUser);
  }

  render() {
    return (
      <main className={styles.main}>
        <div className={styles.login}>
          <h2 className={styles.h2}>User Login</h2>
          <form onSubmit={this.onSubmit}>
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
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
            <br />
            <button className={styles.btn} name="btn">
              Submit
            </button>
            <Link to="/sign_up" className={(styles.p, styles.link)}>
              Not a member,sign up
            </Link>
          </form>
        </div>
      </main>
    );
  }
}
export default Login;
