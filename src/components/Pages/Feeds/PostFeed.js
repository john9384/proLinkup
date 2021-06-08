import PostItem from "./PostItem";
import Spinner from "../../common/spinner/Spinner";

const PostFeed = ({ posts }) => {
  if (typeof posts == "undefined") {
    return (
      <div className="page-main">
        <Spinner />
      </div>
    );
  } else {
    const feedContent = posts.map((feed) => (
      <PostItem key={feed.id} post={feed} />
    ));
    return <div className="u-margin-bottom-large">{feedContent}</div>;
  }
};

export default PostFeed;
