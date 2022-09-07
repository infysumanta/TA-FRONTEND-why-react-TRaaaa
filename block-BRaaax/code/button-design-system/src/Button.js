import React from "react";
import PropTypes from "prop-types";
import "./button.css";
function Button(props) {
  let size = props.size ? `button-${props.size}` : "button-medium";
  let types = props.type ? `button-${props.type}` : "button-primary";

  let className = `button ${size} ${types}`;

  return (
    <button
      className={className}
      onClick={props.onClickHandler}
      disabled={props.disabled}
    >
      {props.label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
