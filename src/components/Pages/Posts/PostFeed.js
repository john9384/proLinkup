import React, { Component } from "react";
import PropTypes from "prop-types";
import PostItem from "./PostItem";
import styles from "./Post.module.css";

class PostFeed extends Component {
  render() {
    const { posts } = this.props;
    let feeds = [];
    if (posts == null || posts == "undefined") {
      console.log("Undefined");
    } else {
      for (let [key, value] of Object.entries(posts)) {
        feeds.push(<PostItem key={value.id} post={value} />);
      }
    }

    return <div className={styles.post_feeds}>{feeds}</div>;
  }
}

PostFeed.propTypes = {
  posts: PropTypes.array.isRequired,
};
export default PostFeed;
