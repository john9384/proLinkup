import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProfileHeader from "./ProfileHeader";
import ProfileAbout from "./ProfileAbout";
import ProfileCreds from "./ProfileCreds";
//import ProfileGithub from "./ProfileGithub";
import Spinner from "../../common/spinner/Spinner";
import Header from "../../Layouts/Header";
import SideNav from "../../Layouts/SideNav";
import {
  getProfileByHandle,
  getProfileById,
} from "../../../redux/actions/profileActions";

const Test = (props) => {
  const { handle, user_id } = props.match.params;
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  let { user, loading } = profile;
  useEffect(() => {
    if (handle) {
      dispatch(getProfileByHandle(handle));
    } else if (user_id) {
      dispatch(getProfileById(user_id));
    }
  }, [dispatch, handle, user_id]);

  return (
    <div>
      <Header />
      <div className="page-body">
        {!loading && user ? (
          <div className="page-main profile">
            <ProfileHeader profile={user} />
            <div className="container">
              <ProfileAbout profile={user} />
              <ProfileCreds
                education={user.content.education}
                experience={user.content.experience}
              />
            </div>
          </div>
        ) : (
          <div className="page-main">
            <Spinner />
          </div>
        )}
        {window.innerWidth > 767 ? <SideNav /> : null}
      </div>
    </div>
  );
};
export default Test;
