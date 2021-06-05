import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { postBgImg } from "../../../redux/actions/profileActions";
import ImageUploader from "react-images-upload";

class PostBgImg extends Component {
  constructor(props) {
    super(props);
    this.state = { image: null };
    this.onDrop = this.onDrop.bind(this);
  }
  onDrop(pictureFile, pictureDataURL) {
    const formData = new FormData();
    formData.append("image", pictureFile[0], pictureFile[0].name);
    console.log(this.props.history);
    this.props.postBgImg(formData, this.props.history);
  }

  render() {
    return (
      <div className="dashboard__cover--bg-upload">
        <ImageUploader
          withIcon={true}
          buttonText="Change Background"
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
PostBgImg.propTypes = {
  postBgImg: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};
export default connect(mapStateToProps, {
  postBgImg,
})(PostBgImg);
