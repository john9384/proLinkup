import { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../../redux/actions/authActions";
import InputField from "../../common/inputFieldGroup/InputTextField";
import hasError from "../../../helpers/validator";
//fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      errors: {},
    });
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onSubmit(e) {
    e.preventDefault();
    const currentUserData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(currentUserData);
  }

  render() {
    const { errors } = this.state;
    if (errors) {
      var err_obj = hasError(errors.content);
    }
    return (
      <div className="animate__animated animate__fadeIn login">
        <Link to="/" className="icon">
          <FontAwesomeIcon icon={faHome} />
        </Link>

        <div className="container">
          <main className="login__main">
            <h2 className="login__h2 heading--pry"> User Login </h2>
            <form onSubmit={this.onSubmit}>
              <InputField
                type="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.onChange}
                classname={
                  errors && err_obj.field === "email"
                    ? "input login__input input__error"
                    : "input login__input"
                }
                info=""
                error={
                  errors && err_obj.field === "email" ? err_obj.detail : null
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
                    ? "input login__input input__error"
                    : "input login__input"
                }
                info=""
                error={
                  errors && err_obj.field === "password" ? err_obj.detail : null
                }
              />
              <button className="btn btn--pry login__btn" name="btn">
                Submit
              </button>
              <Link to="/sign_up" className="login__not-reg">
                Not registered
              </Link>
            </form>
          </main>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(Login);
