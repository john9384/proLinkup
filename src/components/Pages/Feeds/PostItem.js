import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  deletePost,
  addLike,
  removeLike,
} from "../../../redux/actions/postActions";
import Spinner from "../../common/spinner/Spinner";

class PostItem extends Component {
  onDeleteClick(id) {
    this.props.deletePost(id);
  }

  onLikeClick(id) {
    this.props.addLike(id);
  }

  onUnlikeClick(id) {
    this.props.removeLike(id);
  }

  findUserLike(likes) {
    const { auth } = this.props;
    if (likes.filter((like) => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { post, auth, showActions } = this.props;
    if (post === "undefined" || post == null) {
      return <Spinner />;
    } else {
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
            {showActions ? (
              <div className="post-card__actions">
                <i
                  onClick={this.onLikeClick.bind(this, post._id)}
                  type="button"
                  className="fa fa-thumbs-up post-card__reaction post-card__like"
                ></i>

                <i
                  onClick={this.onUnlikeClick.bind(this, post._id)}
                  type="button"
                  className="fa fa-thumbs-down post-card__reaction post-card__dislike"
                ></i>

                <Link
                  to={`/post/${post._id}`}
                  className="post-card__reaction post-card__comment"
                >
                  <i className="fa fa-comments"></i>
                </Link>

                {post.user === auth.user.payload.id ? (
                  <i
                    onClick={this.onDeleteClick.bind(this, post._id)}
                    className="fa fa-times post-card__del"
                  />
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      );
    }
  }
}

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deletePost, addLike, removeLike })(
  PostItem
);
