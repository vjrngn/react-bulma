import React from 'react';
import classnames from 'classnames';

function Form (props) {
  function getButtonClasses () {
    return classnames({
      'button': true,
      'is-small': props.size === 'small' || true,
      'is-medium': props.size === 'medium',
      'is-large': props.size === 'large',
      'is-primary': props.buttonStyle === 'primary',
      'is-warning': props.buttonStyle === 'warning',
      'is-danger': props.buttonStyle === 'danger',
      'is-info': props.buttonStyle === 'info',
      'is-success': props.buttonStyle === 'success',
      'is-light': props.buttonStyle === 'light',
      'is-dark': props.buttonStyle === 'dark',
      'is-black': props.buttonStyle === 'black',
      'is-loading': !!props.isLoading
    });
  }

  return (
    <form onSubmit={props.onSubmit}>
      {props.children}
      <div className="field">
        <button type="submit" className={getButtonClasses()}>{props.buttonText || 'Save'}</button>
      </div>
    </form>
  )
}

Form.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  buttonText: React.PropTypes.string,
  buttonStyle: React.PropTypes.string
}

module.exports = Form;