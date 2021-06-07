const ProfileAbout = ({ profile }) => {
  const { content } = profile;

  const skills = content.skills.map((skill, index) => (
    <li key={index} className="profile__skill-item">
      {skill}
    </li>
  ));
  return (
    <div className="profile__about">
      <div className="profile__bio">
        <h3 className=" profile__bio-head u-margin-bottom-small u-margin-top-medium">
          {content.username}'s Bio
        </h3>
        {content && content.bio ? (
          <p>{content.bio}</p>
        ) : (
          <h4>You have no bio</h4>
        )}
      </div>
      <div className="profile__skills u-margin-top-medium">
        <h3 className="profile__skills-head">Skills Set</h3>
        <ul className="profile__skills-list">{skills}</ul>
      </div>
    </div>
  );
};

export default ProfileAbout;
