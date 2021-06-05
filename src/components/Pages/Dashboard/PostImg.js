import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { postImg } from "../../../redux/actions/profileActions";
import ImageUploader from "react-images-upload";

class PostImg extends Component {
  constructor(props) {
    super(props);
    this.state = { image: null };
    this.onDrop = this.onDrop.bind(this);
  }
  onDrop(pictureFile, pictureDataURL) {
    const formData = new FormData();
    formData.append("image", pictureFile[0], pictureFile[0].name);
    this.props.postImg(formData, this.props.history);
  }

  render() {
    return (
      <div className="dashboard__cover--upload">
        <ImageUploader
          withIcon={true}
          buttonText="Upload"
          onChange={this.onDrop}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});
PostImg.propTypes = {
  postImg: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};
export default connect(mapStateToProps, {
  postImg,
})(PostImg);
