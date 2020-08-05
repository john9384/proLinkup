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
      <tr key={edu._id}>
        <td>{edu.school}</td>
        <td>{edu.degree}</td>
        <td>
          {edu.from} - {edu.to}
        </td>
        <td>
          <button className="btn" onClick={this.onDelClick.bind(this, edu._id)}>
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div className="edu">
        <h2 className="heading--sec edu__head">Education</h2>
        {isEmpty(this.props.education) ? (
          <h4 className="edu__no-edu">No Education detail added</h4>
        ) : (
          <table>
            <thead>
              <tr>
                <th>School</th>
                <th>Degree</th>
                <th>Years</th>
                <th></th>
              </tr>
              {education}
            </thead>
          </table>
        )}
      </div>
    );
  }
}
EduCard.propTypes = {
  deleteEdu: PropTypes.func.isRequired
};
export default connect(null, { deleteEdu })(EduCard);
