import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import InputTextArea from "../../common/inputFieldGroup/InputTextArea";
import { addPost } from "../../../redux/actions/postActions";

const PostForm = (props) => {
  const [text_input, setText] = useState("");
  const auth = useSelector((state) => state.auth);
  const errors = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { firstname, lastname, avatar } = auth.user.payload;

    const newPost = {
      text: text_input,
      name: `${firstname} ${lastname}`,
      avatar: avatar,
    };
    dispatch(addPost(newPost));
    setText("");
  };
  useEffect(() => {}, [errors]);
  return (
    <div className="feeds__form u-margin-top-medium u-margin-bottom-medium">
      <form onSubmit={onSubmit}>
        <InputTextArea
          classname="textarea feeds__textarea u-margin-bottom-small"
          placeholder="Say something"
          name="text"
          value={text_input}
          onChange={onChange}
          error={errors && errors.content ? errors.content.detail : null}
        />
        <button className="btn btn--pry feeds__submit-btn">Post</button>
      </form>
    </div>
  );
};

export default PostForm;
