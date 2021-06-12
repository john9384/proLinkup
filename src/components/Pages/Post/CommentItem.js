import { useSelector, useDispatch } from "react-redux";
import { deleteComment } from "../../../redux/actions/postActions";

const CommentItem = ({ comment, postId }) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="animate__animated animate__fadeInDown post__comment-item ">
      <div className="post__comment-item--head u-margin-bottom-small">
        <div className="post__comment-item--img">
          <img
            src={comment.avatar}
            alt=""
            className="post__comment-item--avatar"
          />
        </div>
        <p className="post__comment-item--info">
          <span className="post__comment-item--name">{comment.name}</span>
          <span className="post__comment-item--handle">{comment.handle}</span>
        </p>
      </div>
      <div className="post__comment-item--content">
        <p className="post__comment-item--text">{comment.text}</p>
        {comment.user !== auth.user.payload.id ? null : (
          <i
            onClick={() => dispatch(deleteComment(postId, comment._id))}
            className="fa fa-times post__comment-item--del"
          ></i>
        )}
      </div>
    </div>
  );
};

export default CommentItem;
