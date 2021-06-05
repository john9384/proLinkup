import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import InputTextArea from "../../common/inputFieldGroup/InputTextArea";
import { addPost } from "../../../redux/actions/postActions";
import Popup from "../../common/popup/Popup";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      error: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ error: newProps.errors });
    }
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const { firstname, lastname, avatar } = this.props.auth.user.payload;

    const newPost = {
      text: this.state.text,
      name: `${firstname} ${lastname}`,
      avatar: avatar
    };

    this.props.addPost(newPost);
    this.setState({ text: "" });
  }

  render() {
    const errors = this.state.error;
    return (
      <div className="feeds__form u-margin-top-medium u-margin-bottom-medium">
        <form onSubmit={this.onSubmit}>
          <InputTextArea
            classname="textarea feeds__textarea u-margin-bottom-small"
            placeholder="Say something"
            name="text"
            value={this.state.text}
            onChange={this.onChange}
          />
          <button className="btn btn--pry feeds__submit-btn">Post</button>
        </form>
        {errors ? <Popup error={errors} /> : null}
      </div>
    );
  }
}
PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { addPost })(PostForm);
