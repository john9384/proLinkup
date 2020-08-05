import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import isEmpty from "../../../helpers/isEmpty";
import { deleteExp } from "../../../redux/actions/profileActions";

class ExpCard extends Component {
  onDelClick(id) {
    this.props.deleteExp(id);
  }
  render() {
    const experience = this.props.experience.map(exp => (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td>{exp.title}</td>
        <td>
          {exp.from} - {exp.to}
        </td>
        <td>
          <button className="btn" onClick={this.onDelClick.bind(this, exp._id)}>
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div className="exp">
        <h2 className="heading--sec exp__head">Experience</h2>
        {isEmpty(this.props.experience) ? (
          <h4 className="exp__no-exp">No Experience added yet</h4>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Company</th>
                <th>Title</th>
                <th>Years</th>
                <th></th>
              </tr>
              {experience}
            </thead>
          </table>
        )}
      </div>
    );
  }
}
ExpCard.propTypes = {
  deleteExp: PropTypes.func.isRequired
};
export default connect(null, { deleteExp })(ExpCard);
