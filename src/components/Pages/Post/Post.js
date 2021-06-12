import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PostItem from "../Feeds/PostItem";
import CommentForm from "./CommentForm";
import CommentFeed from "./CommentFeed";
import Spinner from "../../common/spinner/Spinner";
import { getPost } from "../../../redux/actions/postActions";
import Header from "../../Layouts/Header";
import SideNav from "../../Layouts/SideNav";

const Post = (props) => {
  const post = useSelector((state) => state.post);
  const auth = useSelector((state) => state.auth);
  const { single, loading } = post;
  const dispatch = useDispatch();
  const post_id = props.match.params.id;
  useEffect(() => {
    if (post_id) {
      dispatch(getPost(post_id));
    }
  }, [dispatch, post_id]);

  let postContent;
  if (
    single === null ||
    loading ||
    Object.keys(single).length === 0 ||
    Object.keys(single).length == null
  ) {
    postContent = (
      <div className="page-main">
        <Spinner />
      </div>
    );
  } else {
    postContent = (
      <div className="animate__animated animate__fadeIn page-main">
        <div className="post">
          <PostItem post={single.content} showActions={false} />
          <CommentForm postId={single.content._id} />
          <CommentFeed
            comments={single.content.comments}
            postId={single.content._id}
            auth={auth}
          />
        </div>
      </div>
    );
  }
  return (
    <>
      <Header />
      <div className="page-body">
        {postContent}
        {window.innerWidth > 767 ? <SideNav /> : null}
      </div>
    </>
  );
};

export default Post;
