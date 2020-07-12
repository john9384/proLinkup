import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextAreaFieldGroup from "../../common/inputFieldGroup/InputTextField";
import classnames from "classnames";
import { addComment } from "../../../redux/actions/postActions";
import styles from "./Post.module.css";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;
    const { postId } = this.props;

    const newComment = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar,
    };

    this.props.addComment(postId, newComment);
    this.setState({ text: "" });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className={styles.comment_form}>
        <p>Make a comment...</p>
        <form onSubmit={this.onSubmit}>
          <TextAreaFieldGroup
            classname={classnames("textarea", styles.textarea)}
            placeholder="Reply to post"
            name="text"
            value={this.state.text}
            onChange={this.onChange}
            error={errors.text}
          />
          <button
            type="submit"
            className={classnames("btn", styles.btn_comment)}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

CommentForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { addComment })(CommentForm);
