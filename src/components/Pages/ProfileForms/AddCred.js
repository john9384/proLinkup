import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputField from "../../common/inputFieldGroup/InputTextField";
import InputTextArea from "../../common/inputFieldGroup/InputTextArea";
import { addExp, addEdu } from "../../../redux/actions/profileActions";
import SideNav from "../../Layouts/SideNav/SideNav";
import Header from "../../Layouts/Header/Header";

const checkErrorField = (error, field) =>
  error && error.content && error.content.field === field ? true : false;

export const AddExp = (props) => {
  const [expData, setExpData] = useState({
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
    errors: {},
    disabled: false,
  });
  // const profile = useSelector((state) => state.profile);
  const errors = useSelector((state) => state.errors);
  const dispatch = useDispatch();

  // Input field handler
  const onChange = (e) => {
    setExpData({ ...expData, [e.target.name]: e.target.value });
  };

  // Input Checkbox handler
  const onCheck = (e) => {
    setExpData({
      ...expData,
      disabled: !expData.disabled,
      current: !expData.current,
    });
  };
  // Form submit Handler
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = {
      company: expData.company,
      title: expData.title,
      location: expData.location,
      from: expData.from,
      to: expData.to,
      current: expData.current,
      description: expData.description,
    };

    (() => {
      dispatch(addExp(formData, props.history));
    })();
  };

  useEffect(() => {}, [errors]);

  return (
    <>
      <Header />
      <div className="page-body">
        <div className="animate__animated animate__fadeInDown page-main add-cred">
          <h1 className="add-cred__h1 heading--pry">Add Experience</h1>
          <form onSubmit={onSubmit} className="add-cred__form">
            <InputField
              placeholder="Company"
              name="company"
              value={expData.company}
              onChange={onChange}
              classname={`input add-cred__input ${
                checkErrorField(errors, "company") ? "input__error" : ""
              }`}
              info=""
              error={
                checkErrorField(errors, "company")
                  ? errors.content.detail
                  : null
              }
            />
            <InputField
              placeholder="Title"
              name="title"
              value={expData.title}
              onChange={onChange}
              classname={`input add-cred__input ${
                checkErrorField(errors, "title") ? "input__error" : ""
              }`}
              info=""
              error={
                checkErrorField(errors, "title") ? errors.content.detail : null
              }
            />
            <InputField
              type="text"
              placeholder="Location"
              name="location"
              value={expData.location}
              onChange={onChange}
              classname={`input add-cred__input ${
                checkErrorField(errors, "location") ? "input__error" : ""
              }`}
              info=""
              error={
                checkErrorField(errors, "location")
                  ? errors.content.detail
                  : null
              }
            />
            <div className="add-cred__input">
              <div className="add-cred__date">
                <span>Start Date</span>
                <input
                  type="date"
                  placeholder="From"
                  name="from"
                  value={expData.from}
                  onChange={onChange}
                  className={`input add-cred__date--field ${
                    checkErrorField(errors, "from") ? "input__error" : ""
                  }`}
                />
              </div>
              <div>
                {checkErrorField(errors, "from") ? (
                  <span className="input__info">{errors.content.detail}</span>
                ) : null}
              </div>
            </div>

            <div className="add-cred__input add-cred__check-div">
              <span className="add-cred__checkbox-text"> Current</span>
              <input
                type="checkbox"
                id="check"
                className="add-cred__checkbox-btn"
                placeholder="current"
                name="current"
                value={expData.current}
                onChange={onCheck}
              />
              <label for="check" className="add-cred__checkbox-label">
                <span className="add-cred__checkbox-span"></span>
              </label>
            </div>
            {expData.disabled ? null : (
              <div className="add-cred__input">
                <div className="add-cred__date">
                  <span>End Date</span>
                  <input
                    type="date"
                    placeholder="End Date"
                    name="to"
                    value={expData.from}
                    onChange={onChange}
                    className={`input add-cred__date--field ${
                      checkErrorField(errors, "to") ? "input__error" : ""
                    }`}
                  />
                </div>
                <div>
                  {checkErrorField(errors, "to") ? (
                    <span className="input__info">{errors.content.detail}</span>
                  ) : null}
                </div>
              </div>
            )}
            <InputTextArea
              placeholder="Description"
              name="description"
              value={expData.description}
              onChange={onChange}
              classname={`add-cred__textarea textarea ${
                checkErrorField(errors, "description") ? "input__error" : ""
              }`}
            />
            <div>
              {checkErrorField(errors, "description") ? (
                <span className="input__info">{errors.content.detail}</span>
              ) : null}
            </div>
            <input
              type="submit"
              value="submit"
              className="btn btn--pry add-cred__btn"
            />
          </form>
        </div>{" "}
        <SideNav />
      </div>
    </>
  );
};

export const AddEdu = (props) => {
  const [eduData, setEduData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
    errors: {},
    disabled: false,
  });
  // const profile = useSelector((state) => state.profile);
  const errors = useSelector((state) => state.errors);
  const dispatch = useDispatch();

  // Input field handler
  const onChange = (e) => {
    setEduData({ ...eduData, [e.target.name]: e.target.value });
  };

  // Input Checkbox handler
  const onCheck = () => {
    setEduData({
      ...eduData,
      disabled: !eduData.disabled,
      current: !eduData.current,
    });
  };
  // Form submit Handler
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = {
      school: eduData.school,
      degree: eduData.degree,
      fieldofstudy: eduData.fieldofstudy,
      from: eduData.from,
      to: eduData.to,
      current: eduData.current,
      description: eduData.description,
    };
    (() => {
      dispatch(addEdu(formData, props.history));
    })();
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);
  return (
    <>
      <Header />
      <div className="page-body">
        <div className="animate__animated animate__fadeInDown page-main add-cred">
          <h1 className="add-cred__h1 heading--pry">Add Education</h1>
          <form className="add-cred__form" onSubmit={onSubmit}>
            <InputField
              placeholder="School"
              name="school"
              value={eduData.school}
              onChange={onChange}
              classname={`input add-cred__input ${
                checkErrorField(errors, "school") ? "input__error" : ""
              }`}
              info=""
              error={
                checkErrorField(errors, "school") ? errors.content.detail : null
              }
            />
            <InputField
              placeholder="Degree"
              name="degree"
              value={eduData.degree}
              onChange={onChange}
              classname={`input add-cred__input ${
                checkErrorField(errors, "degree") ? "input__error" : ""
              }`}
              info=""
              error={
                checkErrorField(errors, "degree") ? errors.content.detail : null
              }
            />
            <InputField
              type="text"
              placeholder="Field of study"
              name="fieldofstudy"
              value={eduData.fieldofstudy}
              onChange={onChange}
              classname={`input add-cred__input ${
                checkErrorField(errors, "fieldofstudy") ? "  input__error" : ""
              }`}
              info=""
              error={
                checkErrorField(errors, "fieldofstudy")
                  ? errors.content.detail
                  : null
              }
            />
            <div className="add-cred__input">
              <div className="add-cred__date">
                <span>Start Date</span>
                <input
                  type="date"
                  placeholder="From"
                  name="from"
                  value={eduData.from}
                  onChange={onChange}
                  className={`input add-cred__date--field ${
                    checkErrorField(errors, "from") ? "input__error" : ""
                  }`}
                />
              </div>
              <div>
                {checkErrorField(errors, "from") ? (
                  <span className="input__info">{errors.content.detail}</span>
                ) : null}
              </div>
            </div>

            <div className="add-cred__input add-cred__check-div">
              <span className="add-cred__checkbox-text"> Current</span>
              <input
                type="checkbox"
                id="check"
                className="add-cred__checkbox-btn"
                placeholder="current"
                name="current"
                value={eduData.current}
                onChange={onCheck}
              />
              <label for="check" className="add-cred__checkbox-label">
                <span className="add-cred__checkbox-span"></span>
              </label>
            </div>

            {eduData.disabled ? null : (
              <div className="add-cred__input">
                <div className="add-cred__date">
                  <span>End Date</span>
                  <input
                    type="date"
                    placeholder="End Date"
                    name="to"
                    value={eduData.from}
                    onChange={onChange}
                    className={`input add-cred__date--field ${
                      checkErrorField(errors, "to") ? "input__error" : ""
                    }`}
                  />
                </div>
                <div>
                  {checkErrorField(errors, "to") ? (
                    <span className="input__info">{errors.content.detail}</span>
                  ) : null}
                </div>
              </div>
            )}
            <InputTextArea
              placeholder="Description"
              name="Brief description of education"
              value={eduData.description}
              onChange={onChange}
              classname={`add-cred__textarea textarea ${
                checkErrorField(errors, "description") ? "input__error" : ""
              }`}
            />
            <div>
              {checkErrorField(errors, "description") ? (
                <span className="input__info">{errors.content.detail}</span>
              ) : null}
            </div>
            <input type="submit" value="submit" className="btn btn--pry " />
          </form>
        </div>
        <SideNav />
      </div>
    </>
  );
};
