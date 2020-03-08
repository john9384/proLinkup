import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import InputField from "../../common/inputFieldGroup/InputTextField";
import InputTextArea from "../../common/inputFieldGroup/InputTextArea";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./Form.module.css";
import { addExp } from "../../../redux/actions/profileActions";
class AddExp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: "",
      title: "",
      location: "",
      from: "",
      to: "",
      current: "",
      description: "",
      errors: {},
      disabled: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const expData = {
      company: this.state.company,
      title: this.state.title,
      location: this.state.location,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description
    };
    this.addExp(expData, this.props.history);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onCheck(e) {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current
    });
  }

  render() {
    return (
      <div>
        <Link to="/dashboard" className="btn">
          Back
        </Link>
        <h1 className={styles.h1}>Add Experience</h1>
        <form onSubmit={this.onSubmit}>
          <InputField
            placeholder="* Company"
            name="company"
            value={this.state.company}
            onChange={this.onChange}
          />
          <InputField
            placeholder="Title"
            name="title"
            value={this.state.title}
            onChange={this.onChange}
          />
          <InputField
            type="date"
            placeholder="Location"
            name="location"
            value={this.state.location}
            onChange={this.onChange}
          />
          <InputField
            type="date"
            placeholder="From"
            name="from"
            value={this.state.from}
            onChange={this.onChange}
          />
          <InputField
            type="date"
            placeholder="to"
            name="to"
            value={this.state.to}
            onChange={this.onChange}
            disabled={this.state.disabled ? "disabled" : ""}
          />
          <InputField
            type="checkbox"
            placeholder="current"
            name="current"
            value={this.state.current}
            onChange={this.onCheck}
          />
          <InputTextArea
            placeholder="description"
            name="description"
            value={this.state.description}
            onChange={this.onChange}
          />
          <input type="submit" value="submit" className="btn" />
        </form>
      </div>
    );
  }
}
AddExp.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  addExp: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});
export default connect(mapStateToProps, addExp)(withRouter(AddExp));
