import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deletePost,
  addLike,
  removeLike,
} from "../../../redux/actions/postActions";
import Spinner from "../../common/spinner/Spinner";
//fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

const PostItem = ({ post }) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // const findUserLike = (likes) => {
  //   if (likes.filter((like) => like.user === auth.user.id).length > 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };
  if (post === "undefined" || post == null) {
    console.log("stopping here");
    return <Spinner />;
  } else {
    const date = new Date(post.date || post.createdAt);

    return (
      <div className="post-card">
        <div className="post-card__head">
          <Link to={`/profile/${post.user}`} className="post-card__img">
            <img src={post.avatar} alt="" className="post-card__avatar" />
          </Link>
          <div className="post-card__info">
            <span className="post-card__name">{post.name}</span>
            <Link to={`/profile/${post.user}`} className="post-card__handle">
              @{post.handle}
            </Link>
          </div>
        </div>
        <div>
          <p className="post-card__content">{post.text}</p>
          <p className="post-card__like-no">{post.likes.length} Likes</p>

          <div className="post-card__actions">
            <span
              onClick={() => dispatch(addLike(post._id))}
              className="post-card__reaction post-card__like"
            >
              <FontAwesomeIcon icon={faThumbsUp} />
            </span>

            <span
              onClick={(e) => dispatch(removeLike(post._id))}
              className="post-card__reaction post-card__dislike"
            >
              <FontAwesomeIcon icon={faThumbsDown} />
            </span>

            <Link
              to={`/post/${post._id}`}
              className="post-card__reaction post-card__comment"
            >
              <FontAwesomeIcon icon={faComment} />
            </Link>

            {post.user === auth.user.payload.id ? (
              <i
                onClick={() => dispatch(deletePost(post._id))}
                className="fa fa-times post-card__del"
              />
            ) : null}
          </div>
        </div>
        <span className="post-card__date">
          {date.toUTCString().slice(0, 12)}
        </span>
      </div>
    );
  }
};

export default PostItem;
