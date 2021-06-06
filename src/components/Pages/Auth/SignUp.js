import { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signupUser } from "../../../redux/actions/authActions";
import InputField from "../../common/inputFieldGroup/InputTextField";
import hasError from "../../../helpers/validator";
//fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      password: "",
      confirm_password: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value, errors: {} });
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
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
      confirm_password: this.state.confirm_password,
    };
    this.props.signupUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;
    if (errors) {
      var err_obj = hasError(errors.content);
    }
    return (
      <div className="signup">
        <Link to="/" className="icon">
          <FontAwesomeIcon icon={faHome} />
        </Link>

        <div className="container">
          <main className="signup__main">
            <h2 className="signup__h2 heading--pry">User SignUp</h2>
            <form onSubmit={this.onSubmit}>
              <InputField
                name="firstname"
                placeholder="Firstname"
                value={this.state.firstname}
                onChange={this.onChange}
                classname={
                  errors && err_obj.field === "firstname"
                    ? "input signup__input input__error"
                    : "input signup__input"
                }
                error={
                  errors && err_obj.field === "firstname"
                    ? err_obj.detail
                    : null
                }
              />
              <InputField
                name="lastname"
                placeholder="Lastname"
                value={this.state.lastname}
                onChange={this.onChange}
                classname={
                  errors && err_obj.field === "lastname"
                    ? "input signup__input input__error"
                    : "input signup__input"
                }
                error={
                  errors && err_obj.field === "lastname" ? err_obj.detail : null
                }
              />
              <InputField
                type="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.onChange}
                classname={
                  errors && err_obj.field === "email"
                    ? "input signup__input input__error"
                    : "input signup__input"
                }
                error={
                  errors && err_obj.field === "email" ? err_obj.detail : null
                }
              />
              <InputField
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={this.state.phone}
                onChange={this.onChange}
                classname={
                  errors && err_obj.field === "phone"
                    ? "input signup__input input__error"
                    : "input signup__input"
                }
                error={
                  errors && err_obj.field === "phone" ? err_obj.detail : null
                }
              />
              <InputField
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.onChange}
                classname={
                  errors && err_obj.field === "password"
                    ? "input signup__input input__error"
                    : "input signup__input"
                }
                error={
                  errors && err_obj.field === "password" ? err_obj.detail : null
                }
              />
              <InputField
                type="password"
                name="confirm_password"
                placeholder="Confirm Password"
                value={this.state.confirm_password}
                onChange={this.onChange}
                classname={
                  errors && err_obj.field === "confirm_password"
                    ? "input signup__input input__error"
                    : "input signup__input"
                }
                error={
                  errors && err_obj.field === "confirm_password"
                    ? err_obj.detail
                    : null
                }
              />
              <br />
              <button className="btn btn--pry signup__btn" name="btn">
                Submit
              </button>
              <Link to="/login" className="link signup__reg">
                Login instead
              </Link>
            </form>
          </main>
        </div>
      </div>
    );
  }
}
SignUp.propTypes = {
  signupUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProp = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProp, { signupUser })(withRouter(SignUp));
