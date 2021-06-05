import { Link } from "react-router-dom";

const ProfileItems = ({ profile }) => (
  <div className="pros-card">
    <div className="pros-card__img">
      <img src={profile.imgUrl || profile.avatar} alt="avatar" />
    </div>
    <div className="pros-card__details">
      <h3 className="pros-card__name"> {profile.username}</h3>
      <p>
        {profile.status ? (
          <span className="pros-card__position">
            {profile.status}
            <span> at </span>
          </span>
        ) : null}

        {profile.company ? (
          <span className="pros-card__company"> {profile.company} </span>
        ) : null}
      </p>
      <span className="pros-card__location">
        {profile.location ? <span>{profile.location}</span> : null}
      </span>
    </div>
    <div className="pros-card__skills">
      <h3 className="heading--sec pros-card__skills-head">Skill Set </h3>
      <ul className="pros-card__skills-list">
        {profile.skills.slice(0, 3).map((skill, index) => (
          <li key={index} className="pros-card__skills-item">
            {skill}
          </li>
        ))}
      </ul>
    </div>
    <Link
      to={`/profile/handle/${profile.handle}`}
      className="btn btn--pry pros-card__btn"
    >
      View Full Profile
    </Link>
  </div>
);
export default ProfileItems;
