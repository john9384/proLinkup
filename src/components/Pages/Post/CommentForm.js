import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../../redux/actions/postActions";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      errors: {}
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
    const { postId } = this.props;

    const newComment = {
      text: this.state.text
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
      <form
        onSubmit={this.onSubmit}
        className="post__comment-form u-margin-top-medium"
      >
        <input
          className="input post__comment-form--input"
          placeholder="Comment on post"
          name="text"
          value={this.state.text}
          onChange={this.onChange}
        />
        <button type="submit" className="btn btn--pry post__comment-form--btn">
          Post
        </button>
      </form>
    );
  }
}

CommentForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps, { addComment })(CommentForm);
