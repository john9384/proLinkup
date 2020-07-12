import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PostForm from "./PostForm";
import PostFeed from "./PostFeed";
import Spinner from "../../common/spinner/Spinner";
import { getPosts } from "../../../redux/actions/postActions";
import styles from "./Post.module.css";

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    const { posts, loading } = this.props.post;
    const { content } = posts;

    let postContent;

    if (posts === null || loading) {
      postContent = <Spinner />;
    } else {
      postContent = <PostFeed posts={content} />;
    }
    return (
      <div className={styles.post_container}>
        <h1 className={styles.h1}>Create Post</h1>
        <PostForm />
        <h1 className={styles.h1}>Latest Feeds</h1>
        {postContent}
      </div>
    );
  }
}
Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
