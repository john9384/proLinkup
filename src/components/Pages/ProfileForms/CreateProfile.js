import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import InputField from "../../common/inputFieldGroup/InputTextField";
import InputTextArea from "../../common/inputFieldGroup/InputTextArea";
import { postCurrentProfile } from "../../../redux/actions/profileActions";
import Header from "../../Layouts/Header";
import SideNav from "../../Layouts/SideNav";
import hasError from "../../../helpers/validator";

//fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
class CreateProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displaySocialInputs: false,
      handle: "",
      company: "",
      website: "",
      location: "",
      status: "",
      skills: [],
      githubusername: "",
      bio: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      youtube: "",
      instagram: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onSubmit(e) {
    e.preventDefault();
    const profileData = {
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
      status: this.state.status,
      skills: this.state.skills,
      githubusername: this.state.githubusername,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      instagram: this.state.instagram,
    };

    this.props.postCurrentProfile(profileData, this.props.history);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    let { displaySocialInputs, errors } = this.state;
    if (errors) {
      var err_obj = hasError(errors.content);
    }
    let socials;
    if (displaySocialInputs) {
      socials = (
        <div className="profile-form__socials--form">
          <div className="profile-form--group">
            <i className="fa fa-twitter profile-form--icon"></i>
            <input
              type="text"
              name="twitter"
              value={this.state.twitter}
              placeholder="Twitter"
              onChange={this.onChange}
              className={
                errors && err_obj.field === "twitter"
                  ? "input profile-form__input profile-form--social-input input__error"
                  : "input profile-form__input profile-form--social-input"
              }
            />
          </div>
          <div className="profile-form--group">
            <i className="fa fa-linkedin profile-form--icon"></i>

            <input
              type="text"
              name="linkedin"
              value={this.state.linkedin}
              placeholder="Linkedin"
              onChange={this.onChange}
              className={
                errors && err_obj.field === "linkedin"
                  ? "input profile-form__input profile-form--social-input input__error"
                  : "input profile-form__input profile-form--social-input"
              }
            />
          </div>

          <div className="profile-form--group">
            <i className="fa fa-facebook profile-form--icon"></i>
            <input
              type="text"
              name="facebook"
              value={this.state.facebook}
              placeholder="Facebook"
              onChange={this.onChange}
              className={
                errors && err_obj.field === "facebook"
                  ? "input profile-form__input profile-form--social-input input__error"
                  : "input profile-form__input profile-form--social-input"
              }
            />
          </div>

          <div className="profile-form--group">
            <i className="fa fa-youtube profile-form--icon"></i>
            <input
              type="text"
              name="youtube"
              value={this.state.youtube}
              placeholder="Youtube"
              onChange={this.onChange}
              className={
                errors && err_obj.field === "youtube"
                  ? "input profile-form__input profile-form--social-input input__error"
                  : "input profile-form__input profile-form--social-input"
              }
            />
          </div>

          <div className="profile-form--group">
            <i className="fa fa-instagram profile-form--icon"></i>
            <input
              type="text"
              name="instagram"
              value={this.state.instagram}
              placeholder="Instagram"
              onChange={this.onChange}
              className={
                errors && err_obj.field === "instagram"
                  ? "input profile-form__input profile-form--social-input input__error"
                  : "input profile-form__input profile-form--social-input"
              }
            />
          </div>
        </div>
      );
    } else {
      socials = null;
    }

    return (
      <>
        <Header />
        <div className="page-body">
          <div className="animate__animated animate__fadeInDown page-main profile-form">
            <h1 className="profile-form__title heading--pry">
              Create your profile
            </h1>

            <form onSubmit={this.onSubmit} className="profile-form__body">
              <InputField
                type="text"
                name="handle"
                value={this.state.handle}
                placeholder="Handle"
                onChange={this.onChange}
                classname={
                  errors && err_obj.field === "handle"
                    ? "input profile-form__input input__error"
                    : "input profile-form__input"
                }
                info=""
                error={
                  errors && err_obj.field === "handle" ? err_obj.detail : null
                }
              />
              <InputField
                type="text"
                name="company"
                value={this.state.company}
                placeholder="Company"
                onChange={this.onChange}
                classname={
                  errors && err_obj.field === "company"
                    ? "input profile-form__input input__error"
                    : "input profile-form__input"
                }
                info=""
                error={
                  errors && err_obj.field === "company" ? err_obj.detail : null
                }
              />
              <InputField
                type="text"
                name="website"
                value={this.state.website}
                placeholder="Website"
                onChange={this.onChange}
                classname={
                  errors && err_obj.field === "website"
                    ? "input profile-form__input input__error"
                    : "input profile-form__input"
                }
                info=""
                error={
                  errors && err_obj.field === "website" ? err_obj.detail : null
                }
              />
              <InputField
                type="text"
                name="location"
                value={this.state.location}
                placeholder="Location"
                onChange={this.onChange}
                classname={
                  errors && err_obj.field === "location"
                    ? "input profile-form__input input__error"
                    : "input profile-form__input"
                }
                info=""
                error={
                  errors && err_obj.field === "location" ? err_obj.detail : null
                }
              />
              <InputField
                type="text"
                name="skills"
                value={this.state.skills}
                placeholder="Skills"
                onChange={this.onChange}
                classname={
                  errors && err_obj.field === "skills"
                    ? "input profile-form__input input__error"
                    : "input profile-form__input"
                }
                info=""
                error={
                  errors && err_obj.field === "skills" ? err_obj.detail : null
                }
              />
              <InputField
                type="text"
                name="status"
                value={this.state.status}
                placeholder="Job Title"
                onChange={this.onChange}
                classname={
                  errors && err_obj.field === "status"
                    ? "input profile-form__input input__error"
                    : "input profile-form__input"
                }
                info=""
                error={
                  errors && err_obj.field === "status" ? err_obj.detail : null
                }
              />
              <InputField
                type="text"
                name="githubusername"
                value={this.state.githubusername}
                placeholder="Githubusername"
                onChange={this.onChange}
                classname={
                  errors && err_obj.field === "githubusername"
                    ? "input profile-form__input input__error"
                    : "input profile-form__input"
                }
                info=""
                error={
                  errors && err_obj.field === "githubusername"
                    ? err_obj.detail
                    : null
                }
              />
              <InputTextArea
                type="text"
                name="bio"
                value={this.state.bio}
                placeholder="bio"
                onChange={this.onChange}
                classname={
                  errors && err_obj.field === "bio"
                    ? "textarea profile-form__textarea textarea__error"
                    : "textarea profile-form__textarea"
                }
                info=""
                error={
                  errors && err_obj.field === "bio" ? err_obj.detail : null
                }
              />

              <div className="profile-form__socials">
                <button
                  type="button"
                  className="btn btn--sec profile-form--opt-btn"
                  onClick={() => {
                    this.setState((prevState) => ({
                      displaySocialInputs: !prevState.displaySocialInputs,
                    }));
                  }}
                >
                  <span>
                    <FontAwesomeIcon icon={faPlusSquare} />
                  </span>
                  <span>Socials</span>
                </button>
                <small className="profile-form--opt">Optional</small>
                {socials}
              </div>
              <input
                type="submit"
                value="Submit"
                className="btn btn--pry profile-form__submit"
              />
            </form>
          </div>
          <SideNav />
        </div>
      </>
    );
  }
}
CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  profile: state.profile,
  errors: state.errors,
});
export default connect(mapStateToProps, { postCurrentProfile })(
  withRouter(CreateProfile)
);
