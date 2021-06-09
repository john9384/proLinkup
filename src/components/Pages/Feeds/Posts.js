import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostForm from "./PostForm";
import PostFeed from "./PostFeed";
import Spinner from "../../common/spinner/Spinner";
import { getPosts } from "../../../redux/actions/postActions";
import SideNav from "../../Layouts/SideNav";
import Header from "../../Layouts/Header";
const Posts = () => {
  const auth = useSelector((state) => state.auth);
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const { list, loading } = post;

  let postContent;

  if (list === null || loading) {
    postContent = (
      <div className="page-main">
        <Spinner />
      </div>
    );
  } else {
    postContent = <PostFeed posts={list.content} auth={auth} />;
  }
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <>
      <Header />
      <div className="page-body">
        <div className="animate__animated animate__fadeIn  page-main feeds">
          <PostForm />
          <h1 className="heading--sec feeds__head-2">Latest Feeds</h1>
          {postContent}
        </div>
        {window.innerWidth > 767 ? <SideNav /> : null}
      </div>
    </>
  );
};

export default Posts;
