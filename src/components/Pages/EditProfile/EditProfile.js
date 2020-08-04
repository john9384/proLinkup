import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import InputField from "../../common/inputFieldGroup/InputTextField";
import InputTextArea from "../../common/inputFieldGroup/InputTextArea";
import InputSelect from "../../common/inputFieldGroup/InputSelect";
import SideNav from "../../Layouts/SideNav/SideNav";
import Popup from "../../common/popup/Popup";
import {
  postCurrentProfile,
  getCurrentProfile
} from "../../../redux/actions/profileActions";
import isEmpty from "../../../helpers/isEmpty";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: "",
      company: "",
      website: "",
      location: "",
      skills: "",
      status: "",
      githubusername: "",
      bio: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      youtube: "",
      instagram: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillMount() {
    this.setState({ errors: false });
  }
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile.content;

      const skillsCSV = profile.skills.join(",");

      profile.company = !isEmpty(profile.company) ? profile.company : "";

      profile.website = !isEmpty(profile.website) ? profile.website : "";

      profile.location = !isEmpty(profile.location) ? profile.location : "";

      profile.githubusername = !isEmpty(profile.githubusername)
        ? profile.githubusername
        : "";

      profile.bio = !isEmpty(profile.bio) ? profile.bio : "";

      profile.social = !isEmpty(profile.social) ? profile.social : {};

      profile.twitter = !isEmpty(profile.social.twitter)
        ? profile.social.twitter
        : "";

      profile.facebook = !isEmpty(profile.social.facebook)
        ? profile.social.facebook
        : "";

      profile.linkedin = !isEmpty(profile.social.linkedin)
        ? profile.social.linkedin
        : "";

      profile.youtube = !isEmpty(profile.social.youtube)
        ? profile.social.youtube
        : "";

      profile.instagram = !isEmpty(profile.social.instagram)
        ? profile.social.instagram
        : "";

      this.setState({
        handle: profile.handle,
        company: profile.company,
        website: profile.website,
        location: profile.location,
        status: profile.status,
        skills: skillsCSV,
        githubusername: profile.githubusername,
        bio: profile.bio,
        twitter: profile.twitter,
        facebook: profile.facebook,
        linkedin: profile.linkedin,
        youtube: profile.youtube,
        instagram: profile.instagram
      });
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
      instagram: this.state.instagram
    };
    this.props.postCurrentProfile(profileData, this.props.history);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    let { displaySocialInputs, errors } = this.state;
    let socials;
    if (displaySocialInputs) {
      socials = (
        <div>
          <div className="profile-form--group">
            <i className="fa fa-twitter profile-form--icon"></i>
            <input
              type="text"
              name="twitter"
              value={this.state.twitter}
              placeholder="Twitter"
              className="profile-form__input input profile-form--social-input"
              onChange={this.onChange}
            />
          </div>
          <div className="profile-form--group">
            <i className="fa fa-linkedin profile-form--icon"></i>

            <input
              type="text"
              name="linkedin"
              value={this.state.linkedin}
              placeholder="Linkedin"
              className="profile-form__input input profile-form--social-input"
              onChange={this.onChange}
            />
          </div>

          <div className="profile-form--group">
            <i className="fa fa-facebook profile-form--icon"></i>
            <input
              type="text"
              name="facebook"
              value={this.state.facebook}
              placeholder="Facebook"
              className="profile-form__input input profile-form--social-input"
              onChange={this.onChange}
            />
          </div>

          <div className="profile-form--group">
            <i className="fa fa-youtube profile-form--icon"></i>
            <input
              type="text"
              name="youtube"
              value={this.state.youtube}
              placeholder="Youtube"
              className="profile-form__input input profile-form--social-input"
              onChange={this.onChange}
            />
          </div>

          <div className="profile-form--group">
            <i className="fa fa-instagram profile-form--icon"></i>
            <input
              type="text"
              name="instagram"
              value={this.state.instagram}
              placeholder="Instagram"
              className="profile-form__input input profile-form--social-input"
              onChange={this.onChange}
            />
          </div>
        </div>
      );
    } else {
    }

    return (
      <div className="row">
        <div className="col-2-of-3 profile-form">
          <h1 className="profile-form__title heading--pry">
            Edit your profile
          </h1>
          <form onSubmit={this.onSubmit}>
            <InputField
              type="text"
              name="handle"
              value={this.state.handle}
              placeholder="* Handle"
              classname="profile-form__input input"
              onChange={this.onChange}
            />
            <InputField
              type="text"
              name="company"
              value={this.state.company}
              placeholder="Company"
              classname="profile-form__input input"
              onChange={this.onChange}
            />
            <InputField
              type="text"
              name="website"
              value={this.state.website}
              placeholder="Website"
              classname="profile-form__input input"
              onChange={this.onChange}
            />
            <InputField
              type="text"
              name="location"
              value={this.state.location}
              placeholder="Location"
              classname="profile-form__input input"
              onChange={this.onChange}
            />
            <InputField
              type="text"
              name="skills"
              value={this.state.skills}
              placeholder="Skills"
              classname="profile-form__input input"
              onChange={this.onChange}
            />
            <InputSelect
              classname="profile-form__input input"
              name="status"
              value={this.state.status}
              options={[
                { label: "Junior", value: "junior" },
                { label: "Intermediate", value: "intermidiate" },
                { label: "Proffessional", value: "proffessional" },
                { label: "Expert", value: "expert" }
              ]}
              onChange={this.onChange}
            />
            <InputField
              type="text"
              name="githubusername"
              value={this.state.githubusername}
              placeholder="Githubusername"
              classname="profile-form__input input"
              onChange={this.onChange}
            />
            <InputTextArea
              type="text"
              name="bio"
              value={this.state.bio}
              placeholder="bio"
              classname="profile-form__textarea textarea"
              onChange={this.onChange}
            />

            <div className="profile-form__socials">
              <button
                type="button"
                className="btn btn--sec"
                onClick={() => {
                  this.setState(prevState => ({
                    displaySocialInputs: !prevState.displaySocialInputs
                  }));
                }}
              >
                <i className="fa fa-plus"></i>
                &nbsp; Socials
              </button>
              <small className="profile-form--opt">Optional</small>
              {socials}
            </div>
            <input
              type="submit"
              value="Submit"
              className="btn btn--pry profile-form__submit"
            />
            {errors ? <Popup error={errors} /> : null}
          </form>
        </div>

        <SideNav />
      </div>
    );
  }
}
EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});
export default connect(mapStateToProps, {
  postCurrentProfile,
  getCurrentProfile
})(withRouter(EditProfile));
