import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import InputField from "../../common/inputFieldGroup/InputTextField";
import InputTextArea from "../../common/inputFieldGroup/InputTextArea";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addExp } from "../../../redux/actions/profileActions";
import SideNav from "../../Layouts/SideNav/SideNav";
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
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
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
    this.props.addExp(expData, this.props.history);
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
      <div className="row">
        <div className="col-2-of-3 add-exp">
          <h1 className="add-exp__h1 heading--pry">Add Experience</h1>
          <form onSubmit={this.onSubmit}>
            <InputField
              classname="add-exp__input input"
              placeholder="* Company"
              name="company"
              value={this.state.company}
              onChange={this.onChange}
            />
            <InputField
              classname="add-exp__input input"
              placeholder="Title"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            />
            <InputField
              classname="add-exp__input input"
              type="text"
              placeholder="Location"
              name="location"
              value={this.state.location}
              onChange={this.onChange}
            />
            <span className="add-exp__date-header heading--label">
              Start Date
            </span>
            <input
              className="add-exp__input input add-exp__date"
              type="date"
              placeholder="From"
              name="from"
              value={this.state.from}
              onChange={this.onChange}
            />
            <div className="add-exp__check-div">
              <input
                type="checkbox"
                id="check"
                className="add-exp__checkbox-btn"
                placeholder="current"
                name="current"
                value={this.state.current}
                onChange={this.onCheck}
              />

              <label
                for="check"
                className="add-exp__checkbox-label heading--label"
              >
                <span className="add-exp__checkbox-span"></span>
                Current
              </label>
            </div>
            {this.state.disabled ? null : (
              <div>
                <span className="add-exp__date-header heading--label">
                  End Date
                </span>
                <input
                  className="add-exp__input input add-exp__date"
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
              classname="add-exp__textarea textarea"
              placeholder="description"
              name="description"
              value={this.state.description}
              onChange={this.onChange}
            />
            <input type="submit" value="submit" className="btn btn--pry" />
          </form>
        </div>
        <SideNav />
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
export default connect(mapStateToProps, { addExp })(withRouter(AddExp));
