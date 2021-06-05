import { Component } from "react";
import PropTypes from "prop-types";
import PostItem from "./PostItem";
import Spinner from "../../common/spinner/Spinner";

class PostFeed extends Component {
  render() {
    const posts = this.props.posts;
    if (typeof posts == "undefined") {
      return <Spinner />;
    } else {
      // let feeds = [];
      // for (let [key, value] of Object.entries(posts)) {
      //   feeds.push(value);
      // }
      const feedContent = posts.map((feed) => (
        <PostItem key={feed.id} post={feed} />
      ));
      return <div className="u-margin-bottom-large">{feedContent}</div>;
    }
  }
}

PostFeed.propTypes = {
  posts: PropTypes.array.isRequired,
};
export default PostFeed;
