import CommentItem from "./CommentItem";

const CommentFeed = ({ comments, postId, auth }) => {
  const commentContent = comments.map((comment) => (
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
};

export default CommentFeed;
