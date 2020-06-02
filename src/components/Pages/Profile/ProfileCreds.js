import React, { Component } from "react";
import Moment from "react-moment";
import styles from "./Profile.module.css";

class ProfileCreds extends Component {
  render() {
    const { experience, education } = this.props;
    const expList = experience.map((exp) => (
      <li key={exp._id}>
        <h4>{exp.company}</h4>
        <p>
          <Moment format="YYYY/MM/DD">{exp.from}</Moment>
          {exp.to === null ? (
            "Now"
          ) : (
            <Moment format="YYYY/MM/DD">{exp.from}</Moment>
          )}
        </p>
        <p>
          <strong>Position:</strong> {exp.title}
        </p>
        <p>
          {exp.location === "" ? null : (
            <span>
              <strong>Location:</strong> <strong>{exp.location}</strong>
            </span>
          )}
        </p>
        <p>
          {exp.description === "" ? null : (
            <span>
              <strong>Description:</strong> <strong>{exp.description}</strong>
            </span>
          )}
        </p>
      </li>
    ));
    const eduList = education.map((edu) => (
      <li key={edu._id}>
        <h4>{edu.company}</h4>
        <p>
          <Moment format="YYYY/MM/DD">{edu.from}</Moment>
          {edu.to === null ? (
            "Now"
          ) : (
            <Moment format="YYYY/MM/DD">{edu.from}</Moment>
          )}
        </p>
        <p>
          <strong>Position:</strong> {edu.degree}
        </p>
        <p>
          <strong>Field of Study:</strong> {edu.fieldofstudy}
        </p>
        <p>
          {edu.description === "" ? null : (
            <span>
              <strong>Description:</strong> <strong>{edu.description}</strong>
            </span>
          )}
        </p>
      </li>
    ));
    return (
      <div className={styles.profile__creds}>
        <div className={styles.creds__exp}>
          <h3>Experience</h3>
          {expList.length > 0 ? <ul>{expList}</ul> : <h4>No Experience</h4>}
        </div>

        <div className={styles.creds__edu}>
          <h3>Education</h3>
          {eduList.length > 0 ? <ul>{eduList}</ul> : <h4>No Education</h4>}
        </div>
      </div>
    );
  }
}
export default ProfileCreds;
