import React from "react";
import PropTypes from "prop-types";

const InputSelect = ({
  name,
  placeholder,
  value,
  error,
  info,
  onChange,
  classname,
  options
}) => {
  const selectOptions = options.map(option => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <div>
      <select
        className={classname}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        options={options}
      >
        <option hidden value="#">
          Select Status
        </option>
        {selectOptions}
      </select>
      <small style={{ display: "block" }}>{info}</small>
    </div>
  );
};
InputSelect.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
  classname: PropTypes.string,
  options: PropTypes.array.isRequired
};

export default InputSelect;
