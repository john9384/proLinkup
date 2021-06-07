import { Component } from "react";
import { connect } from "react-redux";
import styles from "./Popup.module.css";
import PropTypes from "prop-types";

class Popup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errMessage: "",
      errState: false,
    };
    this.onClick = this.onClick.bind(this);
  }
  componentDidMount() {
    this.setState({ errState: false });
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errState: true, errMessage: this.props.errors.message });
    }
  }

  onClick() {
    this.setState({ errState: false });
  }
  render() {
    const { errState } = this.state;
    const card = (
      <div>
        <div className={styles.screen}></div>
        <div className={styles.offset}>
          <div className={styles.popup}>
            <div className={styles.detail}>{this.props.errors.message}</div>
            <button className={styles.btndanger} onClick={this.onClick}>
              X
            </button>
          </div>
        </div>
      </div>
    );
    return <div>{errState ? card : null}</div>;
  }
}
Popup.propTypes = {
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  errors: state.errors,
});
export default connect(mapStateToProps, null)(Popup);
