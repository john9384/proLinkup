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
      <img
        src={
          content.bgImgUrl ||
          "https://images.unsplash.com/photo-1504966981333-1ac8809be1ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
        }
        alt=""
        className="profile__header-bg"
      />
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
        {content && content.social.github ? (
          <a href={content.social.github} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        ) : null}
        {content && content.social.linkedin ? (
          <a href={content.social.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        ) : null}
        {content && content.social.twitter ? (
          <a href={content.social.twitter} target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        ) : null}
        {content && content.social.facebook ? (
          <a href={content.social.facebook} target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
        ) : null}
        {content && content.social.instagram ? (
          <a href={content.social.instagram} target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        ) : null}
        {content && content.social.youtube ? (
          <a href={content.social.youtube} target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
        ) : null}
      </div>
    </div>
  );
};
export default ProfileHeader;
