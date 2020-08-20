import React, { Component } from "react";
import PropTypes from "prop-types";
import PostItem from "./PostItem";

class PostFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: {}
    };
  }
  componentDidMount() {
    this.setState({ posts: this.props.posts });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.setState({ posts: this.props.posts });
    }
  }

  render() {
    const posts = this.state.posts;
    let feeds = [];
    for (let [key, value] of Object.entries(posts)) {
      feeds.push(value);
    }
    const feedContent = feeds.map(feed => (
      <PostItem key={feed.id} post={feed} />
    ));

    return <div>{feedContent}</div>;
  }
}

PostFeed.propTypes = {
  posts: PropTypes.array.isRequired
};
export default PostFeed;
