import { Link } from "react-router-dom";

const ProfileActions = () => {
  return (
    <div className="actions">
      <Link to="/edit-profile" className="actions__link">
        <button className="btn btn--sec actions__btn">
          <i className="fa fa-plus actions__icon"></i>Edit Profile
        </button>
      </Link>

      <Link to="/add-experience" className="actions__link">
        <button className="btn btn--sec actions__btn">
          <i className="fa fa-plus actions__icon"></i>Add Exp
        </button>
      </Link>

      <Link to="/add-education" className="actions__link">
        <button className="btn btn--sec ctions__btn">
          <i className="fa fa-plus actions__icon"></i>Add Edu
        </button>
      </Link>
    </div>
  );
};
export default ProfileActions;
