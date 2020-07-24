import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../../redux/actions/authActions";
import InputField from "../../common/inputFieldGroup/InputTextField";
import Popup from "../../common/popup/Popup";
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
            [e.target.name]: e.target.value });
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
        return ( <
            main className = "login" >
            <
            div className = "login__main" >
            <
            h2 className = "login__h2" > User Login < /h2> <
            form onSubmit = { this.onSubmit } >
            <
            InputField type = "email"
            name = "email"
            placeholder = "Email"
            value = { this.state.email }
            onChange = { this.onChange }
            classname = "input login__input" /
            >
            <
            InputField type = "password"
            name = "password"
            placeholder = "Password"
            value = { this.state.password }
            onChange = { this.onChange }
            classname = 'input login__input'

            /
            >
            <
            button className = "btn login__btn"
            name = "btn" >
            Submit <
            /button> <
            Link to = "/sign_up"
            className = "link login__link" >
            Not registered <
            /Link> <
            /form> <
            /div> { errors ? < Popup error = { errors }
                /> : <div></div > } <
            /main>
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