import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../../redux/actions/postActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const CommentForm = ({ postId }) => {
  const [textInput, setTextInput] = useState("");
  const errors = useSelector((state) => state.errors);
  const dispatch = useDispatch();
  const dispatchComment = (post_id, new_comment) =>
    dispatch(addComment(post_id, new_comment));
  const onSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      text: textInput,
    };
    dispatchComment(postId, newComment);
    setTextInput("");
  };
  const onChange = (e) => {
    setTextInput(e.target.value);
  };
  return (
    <form
      onSubmit={onSubmit}
      className="post__comment-form u-margin-top-medium"
    >
      <input
        className="input post__comment-form--input"
        placeholder="Comment on post"
        name="text"
        value={textInput}
        onChange={onChange}
      />
      <button type="submit" className="btn btn--pry post__comment-form--btn">
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>

      {errors && errors.content ? (
        <small className="input__info"> {errors.content.detail}</small>
      ) : null}
    </form>
  );
};

export default CommentForm;
