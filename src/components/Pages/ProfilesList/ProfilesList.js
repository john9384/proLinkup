import { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../../common/spinner/Spinner";
import { getProfiles } from "../../../redux/actions/profileActions";
import ProfileItems from "./ProfileItems";
import SideNav from "../../Layouts/SideNav";
import Header from "../../Layouts/Header";
import { Redirect } from "react-router-dom";
class ProfilesList extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }
  render() {
    const { list, loading } = this.props.profile;

    let allProfiles;
    let profileItems;

    if (list === null || loading) {
      profileItems = <Spinner />;
    } else {
      if (list.content.length > 0) {
        allProfiles = list.content;
        profileItems = allProfiles.map((profile) => (
          <ProfileItems key={profile._id} profile={profile} loading={loading} />
        ));
      } else {
        profileItems = <Redirect to="/not-found" />;
      }
    }
    return (
      <>
        <Header />
        <div className="page-body">
          <div className="page-main pros">
            <h1 className="heading--pry pros__title"> Explore Profiles</h1>
            <div className="pros__search u-margin-bottom-medium">
              <input
                type="text"
                placeholder="Search profile"
                className="input pros__search--input"
              />
              <i className="fa fa-search pros__search--icon"></i>
            </div>
            <div className="pros__grid">{profileItems}</div>
          </div>
          <SideNav />
        </div>
      </>
    );
  }
}

ProfilesList.propTypes = {
  profile: PropTypes.object.isRequired,
  getProfiles: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(ProfilesList);
