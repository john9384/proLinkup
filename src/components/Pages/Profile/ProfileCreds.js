import { Component } from "react";
// import Moment from "react-moment";

class ProfileCreds extends Component {
  render() {
    const { experience, education } = this.props;

    const expList = experience.map(exp => (
      <div key={exp._id} className="cred__card u-margin-top-medium">
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
          <span className="cred__label">Date</span>:
          <span className="cred__value">{exp.from} -</span>
          {exp.to ? (
            <span className="cred__value">{exp.to}</span>
          ) : (
            <span className="cred__value--current">Current</span>
          )}
        </p>
      </div>
    ));
    const eduList = education.map(edu => (
      <div key={edu._id} className="cred__card u-margin-top-medium">
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
          <span className="cred__label">Date</span>:
          <span className="cred__value">{edu.from} -</span>
          {edu.to ? (
            <span className="cred__value">{edu.to}</span>
          ) : (
            <span className="cred__value--current">Current</span>
          )}
        </p>
      </div>
    ));
    return (
      <div>
        <div className="cred u-margin-top-medium">
          <h2 className="heading--sec cred__head u-margin-top-large">
            Experience
          </h2>
          {expList.length > 0 ? (
            <div>{expList}</div>
          ) : (
            <h4 className="cred__no-exp">No Experience detail added yet</h4>
          )}
        </div>

        <div>
          <h2 className="heading--sec cred__head u-margin-top-medium">
            Education
          </h2>
          {eduList.length > 0 ? (
            <div>{eduList}</div>
          ) : (
            <h4 className="cred__no-edu">No Education detail added yet</h4>
          )}
        </div>
      </div>
    );
  }
}
export default ProfileCreds;
