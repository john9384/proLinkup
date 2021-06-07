import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const ProfileHeader = ({ profile }) => {
  const { content } = profile;
  return (
    <div className="profile__header">
      <img src={content.bgImgUrl} alt="" className="profile__header-bg" />
      <div className="profile__header-img">
        <img
          src={content.imgUrl || content.avatar}
          alt=""
          className="profile__header-avatar"
        />
      </div>
      <div className="profile__header-info">
        <h3 className="profile__header-info--name">{content.username}</h3>
        <p className="profile__header-info--prof">
          {content && content.status ? <span>{content.status} </span> : null}
          {content.status && content.company ? (
            <span className="at"> at </span>
          ) : null}
          {content && content.company ? <span>{content.company}</span> : null}
        </p>
        <p className="profile__header-info--location">
          {content && content.location ? <span>{content.location}</span> : null}
        </p>
      </div>
      {/* Todo: add the icons for social links and website */}
      <div className="profile__header-socials">
        {content && !content.social.github ? (
          <a href={content.social.github}>
            <FaGithub />
          </a>
        ) : null}
        {content && !content.social.linkedin ? (
          <a href={content.social.linkedin}>
            <FaLinkedin />
          </a>
        ) : null}
        {content && !content.social.twitter ? (
          <a href={content.social.twitter}>
            <FaTwitter />
          </a>
        ) : null}
        {content && !content.social.facebook ? (
          <a href={content.social.facebook}>
            <FaFacebook />
          </a>
        ) : null}
        {content && !content.social.instagram ? (
          <a href={content.social.instagram}>
            <FaInstagram />
          </a>
        ) : null}
        {content && !content.social.youtube ? (
          <a href={content.social.youtube}>
            <FaYoutube />
          </a>
        ) : null}
      </div>
    </div>
  );
};
export default ProfileHeader;
