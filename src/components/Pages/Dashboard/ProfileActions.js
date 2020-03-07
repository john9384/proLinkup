import React from "react";
import { Link } from "react-router-dom";

const ProfileActions = () => {
  return (
    <div>
      <button class="btn">
        <Link to="/edit-profile">Add Experience</Link>
      </button>
      <button class="btn">
        <Link to="/add-experience">Add Experience</Link>
      </button>
      <button class="btn">
        <Link to="/add-education">Add Education</Link>
      </button>
    </div>
  );
};
export default ProfileActions;
