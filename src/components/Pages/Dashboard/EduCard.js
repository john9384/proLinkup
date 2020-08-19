import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import isEmpty from "../../../helpers/isEmpty";
import { deleteEdu } from "../../../redux/actions/profileActions";

class EduCard extends Component {
  onDelClick(id) {
    this.props.deleteEdu(id);
  }
  render() {
    const education = this.props.education.map(edu => (
      <div className="cred__card u-margin-top-medium" key={edu._id}>
        <p>
          <span className="cred__label">Degree</span>:
          <span className="cred__value">{edu.degree}</span>
        </p>
        <p>
          <span className="cred__label">School</span>:
          <span className="cred__value">{edu.school}</span>
        </p>
        <p>
          <span className="cred__label">Field</span>:
          <span className="cred__value">{edu.fieldofstudy}</span>
        </p>
        {edu.description ? (
          <p>
            <span className="cred__label">Desc:</span>
            <span className="cred__value">{edu.description}</span>
          </p>
        ) : null}
        <p>
          <span className="cred__label">From</span>:
          <span className="cred__value">{edu.from}</span>
          {edu.to ? (
            <p>
              <span className="cred__label">To</span>:
              <span className="cred__value">{edu.to}</span>
            </p>
          ) : (
            <span className="cred__value--current">Current</span>
          )}
        </p>

        <button
          className="btn btn--danger cred__del-btn"
          onClick={this.onDelClick.bind(this, edu._id)}
        >
          <i className="fa fa-times"></i>
        </button>
      </div>
    ));
    return (
      <div className="cred u-margin-top-medium u-margin-bottom-large">
        <h2 className="heading--sec cred__head">Education</h2>
        {isEmpty(this.props.education) ? (
          <h4 className="cred__no-edu">No Education detail added</h4>
        ) : (
          <div>{education}</div>
        )}
      </div>
    );
  }
}
EduCard.propTypes = {
  deleteEdu: PropTypes.func.isRequired
};
export default connect(null, { deleteEdu })(EduCard);
