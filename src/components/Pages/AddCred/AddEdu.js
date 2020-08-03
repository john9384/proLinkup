import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import InputField from "../../common/inputFieldGroup/InputTextField";
import InputTextArea from "../../common/inputFieldGroup/InputTextArea";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SideNav from "../../Layouts/SideNav/SideNav";
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
      disabled: false
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
      description: this.state.description
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
      current: !this.state.current
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-2-of-3 add-edu">
          <h1 className="add-edu__h1 heading--pry">Add Education</h1>
          <form className="form" onSubmit={this.onSubmit}>
            <InputField
              classname="add-edu__input input"
              placeholder="School"
              name="school"
              value={this.state.school}
              onChange={this.onChange}
            />
            <InputField
              classname="add-edu__input input"
              placeholder="Degree"
              name="degree"
              value={this.state.degree}
              onChange={this.onChange}
            />
            <InputField
              classname="add-edu__input input"
              type="text"
              placeholder="Field of study"
              name="fieldofstudy"
              value={this.state.fieldofstudy}
              onChange={this.onChange}
            />
            <span className="add-edu__date-header heading--label">
              Start Date
            </span>
            <input
              className="add-edu__input input add-edu__date"
              type="date"
              placeholder="From"
              name="from"
              value={this.state.from}
              onChange={this.onChange}
            />
            <div className="add-edu__check-div">
              <input
                type="checkbox"
                id="check"
                className="add-edu__checkbox-btn"
                placeholder="current"
                name="current"
                value={this.state.current}
                onChange={this.onCheck}
              />

              <label
                for="check"
                className="add-edu__checkbox-label heading--label"
              >
                <span className="add-edu__checkbox-span"></span>
                Current
              </label>
            </div>

            {this.state.disabled ? null : (
              <div>
                <span className="add-edu__date-header heading--label">
                  End Date
                </span>
                <input
                  className="add-edu__input input add-edu__date"
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
              classname="add-edu__textarea textarea"
              placeholder="description"
              name="Brief description of education"
              value={this.state.description}
              onChange={this.onChange}
            />
            <input type="submit" value="submit" className="btn btn--pry " />
          </form>
        </div>
        <SideNav />
      </div>
    );
  }
}
AddEdu.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  addEdu: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});
export default connect(mapStateToProps, { addEdu })(withRouter(AddEdu));
