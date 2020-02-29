import React from "react";
import PropTypes from "prop-types";

const InputTextArea = ({
  name,
  placeholder,
  value,
  error,
  info,
  onChange,
  classname
}) => {
  return (
    <div>
      <textarea
        className={classname}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      ></textarea>

      <small style={{ display: "block" }}>{info}</small>
    </div>
  );
};
InputTextArea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
  classname: PropTypes.string
};

export default InputTextArea;
