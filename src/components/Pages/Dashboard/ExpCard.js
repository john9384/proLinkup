import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deletExp } from "../../../redux/actions/profileActions";

class ExpCard extends Component {
  onDelClick(id) {
    this.props.deletExp(id);
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
      <div>
        <h2>Experience</h2>
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
      </div>
    );
  }
}
ExpCard.propTypes = {
  deletExp: PropTypes.func.isRequired
};
export default connect(null, { deletExp })(ExpCard);
