import PropTypes from "prop-types";

const InputTextArea = ({
  name,
  placeholder,
  value,
  error,
  onChange,
  classname,
}) => {
  return (
    <div>
      <textarea
        className={classname}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        error={error}
      ></textarea>

      <small className="input__info">{error}</small>
    </div>
  );
};
InputTextArea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
  classname: PropTypes.string,
};

export default InputTextArea;
