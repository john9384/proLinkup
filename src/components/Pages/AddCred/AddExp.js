import { Component } from "react";
import { withRouter } from "react-router-dom";
import InputField from "../../common/inputFieldGroup/InputTextField";
import InputTextArea from "../../common/inputFieldGroup/InputTextArea";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addExp } from "../../../redux/actions/profileActions";
import SideNav from "../../Layouts/SideNav/SideNav";
import hasError from "../../../helpers/validator";
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
    let { errors } = this.state;
    if (errors) {
      var err_obj = hasError(errors.content);
    }
    return (
      <div className="row">
        <div className="col-2-of-3 add-cred">
          <h1 className="add-cred__h1 heading--pry">Add Experience</h1>
          <form onSubmit={this.onSubmit}>
            <InputField
              placeholder="Company"
              name="company"
              value={this.state.company}
              onChange={this.onChange}
              classname={
                errors && err_obj.field === "company"
                  ? "input add-cred__input input__error"
                  : "input add-cred__input"
              }
              info=""
              error={
                errors && err_obj.field === "company" ? err_obj.detail : null
              }
            />
            <InputField
              placeholder="Title"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
              classname={
                errors && err_obj.field === "title"
                  ? "input add-cred__input input__error"
                  : "input add-cred__input"
              }
              info=""
              error={
                errors && err_obj.field === "title" ? err_obj.detail : null
              }
            />
            <InputField
              type="text"
              placeholder="Location"
              name="location"
              value={this.state.location}
              onChange={this.onChange}
              classname={
                errors && err_obj.field === "location"
                  ? "input add-cred__input input__error"
                  : "input add-cred__input"
              }
              info=""
              error={
                errors && err_obj.field === "location" ? err_obj.detail : null
              }
            />
            <span className="add-cred__date-header heading--label">
              Start Date
            </span>
            <input
              type="date"
              placeholder="From"
              name="from"
              value={this.state.from}
              onChange={this.onChange}
              className={
                errors && err_obj.field === "from"
                  ? "input add-cred__input add-cred__date input__error"
                  : "input add-cred__input add-cred__date"
              }
            />
            <div>
              {errors && err_obj.field === "from" ? (
                <span className="input__info">{err_obj.detail}</span>
              ) : null}
            </div>
            <div className="add-cred__check-div">
              <input
                type="checkbox"
                id="check"
                className="add-cred__checkbox-btn"
                placeholder="current"
                name="current"
                value={this.state.current}
                onChange={this.onCheck}
              />

              <label
                for="check"
                className="add-cred__checkbox-label heading--label"
              >
                <span className="add-cred__checkbox-span"></span>
                Current
              </label>
            </div>
            {this.state.disabled ? null : (
              <div>
                <span className="add-cred__date-header heading--label">
                  End Date
                </span>
                <input
                  className="add-cred__input input add-cred__date"
                  type="date"
                  placeholder="to"
                  name="to"
                  value={this.state.to}
                  onChange={this.onChange}
                  disabled={this.state.disabled ? "disabled" : ""}
                  className={
                    errors && err_obj.field === "to"
                      ? "input add-cred__input add-cred__date input__error"
                      : "input add-cred__input add-cred__date"
                  }
                />
                <div>
                  {errors && err_obj.field === "to" ? (
                    <span className="input__info">{err_obj.detail}</span>
                  ) : null}
                </div>
              </div>
            )}
            <InputTextArea
              classname="add-cred__textarea textarea"
              placeholder="description"
              name="description"
              value={this.state.description}
              onChange={this.onChange}
              classname={
                errors && err_obj.field === "description"
                  ? "textarea add-cred__textarea input__error"
                  : "textarea add-cred__textarea"
              }
            />
            <div>
              {errors && err_obj.field === "description" ? (
                <span className="input__info">{err_obj.detail}</span>
              ) : null}
            </div>
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
