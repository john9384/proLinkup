import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteComment } from "../../../redux/actions/postActions";

class CommentItem extends Component {
  onDeleteClick(postId, commentId) {
    this.props.deleteComment(postId, commentId);
  }

  render() {
    const { comment, postId, auth } = this.props;
    return (
      <div className="post__comment-item ">
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
          {comment.user === auth.user.payload.id ? (
            <i
              onClick={this.onDeleteClick.bind(this, postId, comment._id)}
              className="fa fa-times post__comment-item--del"
            />
          ) : null}
        </div>
      </div>
    );
  }
}

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
