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
      <div className="cred__card u-margin-top-medium" key={exp._id}>
        <p>
          <span className="cred__label">Postion</span>:
          <span className="cred__value">{exp.title}</span>
        </p>
        <p>
          <span className="cred__label">Company</span>:
          <span className="cred__value">{exp.company}</span>
        </p>
        {exp.location ? (
          <p>
            <span className="cred__label">Location</span>:
            <span className="cred__value">{exp.location}</span>
          </p>
        ) : null}
        {exp.description ? (
          <p>
            <span className="cred__label">Desc</span>:
            <span className="cred__value">{exp.description}</span>
          </p>
        ) : null}
        <p>
          <span className="cred__label">From</span>:
          <span className="cred__value">{exp.from}</span>
          {exp.to ? (
            <p>
              <span className="cred__label">To</span>:
              <span className="cred__value">{exp.to}</span>
            </p>
          ) : (
            <span className="cred__value--current">Current</span>
          )}
        </p>

        <button
          className="btn btn--danger cred__del-btn"
          onClick={this.onDelClick.bind(this, exp._id)}
        >
          <i className="fa fa-times"></i>
        </button>
      </div>
    ));
    return (
      <div className="cred">
        <h2 className="heading--sec cred__head">Experience</h2>
        {isEmpty(this.props.experience) ? (
          <h4 className="cred__no-cred">No Experience added yet</h4>
        ) : (
          <div> {experience}</div>
        )}
      </div>
    );
  }
}
ExpCard.propTypes = {
  deleteExp: PropTypes.func.isRequired
};
export default connect(null, { deleteExp })(ExpCard);
