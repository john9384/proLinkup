import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import PostItem from "../Feeds/PostItem";
import CommentForm from "./CommentForm";
import CommentFeed from "./CommentFeed";
import Spinner from "../../common/spinner/Spinner";
import { getPost } from "../../../redux/actions/postActions";
import SideNav from "../../Layouts/SideNav/SideNav";

class Post extends Component {
  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.getPost(this.props.match.params.id);
    }
  }

  render() {
    const { post, loading } = this.props.post;
    const auth = this.props.auth;
    let postContent;
    if (
      post === null ||
      loading ||
      Object.keys(post).length === 0 ||
      Object.keys(post).length == null
    ) {
      postContent = <Spinner />;
    } else {
      postContent = (
        <div className="col-2-of-3">
          <div className="post">
            <PostItem post={post.content} showActions={false} />
            <CommentForm postId={post.content._id} />
            <CommentFeed
              comments={post.content.comments}
              postId={post.content._id}
              auth={auth}
            />
          </div>
        </div>
      );
    }
    return (
      <div className="row">
        {postContent}
        <SideNav />
      </div>
    );
  }
}

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth
});

export default connect(mapStateToProps, {
  getPost
})(Post);
