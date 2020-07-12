import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import classnames from "classnames";
import InputField from "../../common/inputFieldGroup/InputTextField";
import InputTextArea from "../../common/inputFieldGroup/InputTextArea";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./Form.module.css";
import { addEdu } from "../../../redux/actions/profileActions";
class AddEdu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      school: "",
      degree: "",
      fieldofstudy: "",
      from: "",
      to: "",
      current: "",
      description: "",
      errors: {},
      disabled: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const eduData = {
      school: this.state.school,
      degree: this.state.degree,
      fieldofstudy: this.state.fieldofstudy,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description,
    };
    this.props.addEdu(eduData, this.props.history);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  }
  onCheck(e) {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current,
    });
  }

  render() {
    return (
      <div>
        <button className={classnames("btn", styles.back_btn)}>
          <Link to="/dashboard">Back</Link>
        </button>
        <h1 className={styles.h1}>Add Education</h1>
        <form className={styles.form} onSubmit={this.onSubmit}>
          <InputField
            classname={classnames("input", styles.input)}
            placeholder="* School"
            name="school"
            value={this.state.school}
            onChange={this.onChange}
          />
          <InputField
            classname={classnames("input", styles.input)}
            placeholder="Degree"
            name="degree"
            value={this.state.degree}
            onChange={this.onChange}
          />
          <InputField
            classname={classnames("input", styles.input)}
            type="text"
            placeholder="Field of study"
            name="fieldofstudy"
            value={this.state.fieldofstudy}
            onChange={this.onChange}
          />
          <span className={styles.text_current}>Start Date</span>
          <InputField
            classname={classnames("input", styles.input)}
            type="date"
            placeholder="From"
            name="from"
            value={this.state.from}
            onChange={this.onChange}
          />
          <InputField
            type="checkbox"
            placeholder="current"
            name="current"
            value={this.state.current}
            onChange={this.onCheck}
          />
          <span className={styles.text_current}>Current</span>
          {this.state.disabled ? null : (
            <div>
              <span className={styles.text_current}>End Date</span>
              <InputField
                classname={classnames("input", styles.input)}
                type="date"
                placeholder="to"
                name="to"
                value={this.state.to}
                onChange={this.onChange}
                disabled={this.state.disabled ? "disabled" : ""}
              />
            </div>
          )}
          <InputTextArea
            classname={classnames("textarea", styles.textarea)}
            placeholder="description"
            name="description"
            value={this.state.description}
            onChange={this.onChange}
          />
          <input type="submit" value="submit" className={styles.submit_btn} />
        </form>
      </div>
    );
  }
}
AddEdu.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  addEdu: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  profile: state.profile,
  errors: state.errors,
});
export default connect(mapStateToProps, { addEdu })(withRouter(AddEdu));
