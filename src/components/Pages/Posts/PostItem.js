import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Post.module.css";
import {
  deletePost,
  addLike,
  removeLike
} from "../../../redux/actions/postActions";

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
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { post, auth, showActions } = this.props;
    return (
      <div className="post-card">
        <div className="post-card__head">
          <Link to={`/profile/${post.user}`} className="post-card__img">
            <img src={post.avatar} alt="" />
          </Link>
          <Link to={`/profile/${post.user}`} className={styles.post_item__img}>
            Hello
          </Link>
          <span>{post.name}</span>
        </div>

        <div>
          <p className={styles.post_item__content}>{post.text}</p>
          {showActions ? (
            <span>
              <button
                onClick={this.onLikeClick.bind(this, post._id)}
                type="button"
                className={styles.btn_review}
              >
                {
                  <i
                    className={classnames({
                      "text-info": this.findUserLike(post.likes)
                    })}
                  />
                }
                <span>{post.likes.length} Likes</span>
              </button>
              <button
                onClick={this.onUnlikeClick.bind(this, post._id)}
                type="button"
                className={styles.btn_review}
              >
                Unlike
              </button>
              <button className={styles.btn_review}>
                <Link to={`/post/${post._id}`}>Comments</Link>
              </button>
              {post.user === auth.user.id ? (
                <button
                  onClick={this.onDeleteClick.bind(this, post._id)}
                  type="button"
                  className={classnames("btn-danger", styles.btn)}
                >
                  Delete
                </button>
              ) : null}
            </span>
          ) : null}
        </div>
      </div>
    );
  }
}

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deletePost, addLike, removeLike })(
  PostItem
);
