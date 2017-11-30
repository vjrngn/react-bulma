import classnames from "classnames";
import React, { PropTypes } from "react";

function Button(props) {
  function getClasses() {
    return classnames({
      button: true,
      "has-text-capitalized": props.capitalize,
      "is-fullwidth": !!props.fullWidth,
      "is-small": props.size === "small",
      "is-medium": props.size === "medium",
      "is-large": props.size === "large",
      "is-white": props.type === "white",
      "is-light": props.type === "light",
      "is-dark": props.type === "dark",
      "is-black": props.type === "black",
      "is-primary": props.type === "primary",
      "is-success": props.type === "success",
      "is-warning": props.type === "warning",
      "is-info": props.type === "info",
      "is-danger": props.type === "danger",
      default: !props.type || props.type === "normal",
      "is-outlined": !!props.outline,
      "is-inverted": !!props.invert,
      "is-loading": !!props.loading
    });
  }

  return (
    <button
      type={props.htmlType || "button"}
      onClick={props.onClick}
      className={getClasses()}
      disabled={!!props.disabled}
      title={props.title || ""}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  outline: PropTypes.bool,
  invert: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

module.exports = Button;
