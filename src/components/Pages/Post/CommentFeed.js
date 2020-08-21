import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentItem from "./CommentItem";

class CommentFeed extends Component {
  render() {
    const { comments, postId } = this.props;
    let feeds;
    if (comments === null || comments === "undefined") {
      console.log("Undefined");
    } else {
      for (let [key, value] of Object.entries(comments)) {
        console.log(key);
        feeds.push(
          <CommentItem key={value.id} comment={value} postId={postId} />
        );
      }
    }
    return <div>{feeds}</div>;
  }
}

CommentFeed.propTypes = {
  comments: PropTypes.array.isRequired,
  postId: PropTypes.string.isRequired
};

export default CommentFeed;
