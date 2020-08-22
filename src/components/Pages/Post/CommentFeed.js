import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentItem from "./CommentItem";

class CommentFeed extends Component {
  render() {
    const { comments, postId, auth } = this.props;
    const commentContent = comments.map(comment => (
      <CommentItem
        key={comment._id}
        comment={comment}
        postId={postId}
        auth={auth}
      />
    ));
    return (
      <div className="post__comment-feed u-margin-top-medium">
        {commentContent}
      </div>
    );
  }
}

CommentFeed.propTypes = {
  comments: PropTypes.array.isRequired,
  postId: PropTypes.string.isRequired
};

export default CommentFeed;
