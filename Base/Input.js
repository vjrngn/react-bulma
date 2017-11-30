import _ from 'lodash';
import classnames from 'classnames';
import React, { PropTypes } from 'react';

class Input extends React.Component {
  constructor (props) {
    super(props);

    this.getInputClasses = this.getInputClasses.bind(this);
    this.getWrapperClasses = this.getWrapperClasses.bind(this);
  }

  getWrapperClasses () {
    return classnames({
      'control': true,
      'has-icons-left': this.props.hasIcon,
      'has-icons-right': this.props.hasIcon && this.props.iconPosition === 'right',
      'is-loading': this.props.loading,
      'is-expanded': this.props.expand
    });
  }

  getInputClasses () {
    return classnames({
      'input': true,
      'is-primary': this.props.style === 'primary',
      'is-success': this.props.style === 'success',
      'is-info': this.props.style === 'info',
      'is-warning': this.props.style === 'warning',
      'is-danger': this.props.style === 'danger',
      'is-small': this.props.size === 'small',
      'is-medium': this.props.size === 'medium',
      'is-large': this.props.size === 'large',
      'is-focused': this.props.focused
    });
  }

  render () {
    return (
      <div className={this.getWrapperClasses()}>
        {
          React.Children.map(this.props.children, child => {
            if (React.isValidElement(child) && child.type.name === 'Label') {
              return React.cloneElement(child, child.props)
            }
          })
        }
        <input
          max={this.props.max}
          name={this.props.name}
          step={this.props.step}
          value={this.props.value}
          onBlur={this.props.onBlur}
          onFocus={this.props.onFocus}
          onChange={this.props.onChange}
          disabled={this.props.disabled}
          type={this.props.type || 'text'}
          className={this.getInputClasses()} 
          placeholder={this.props.placeholder}
          id={this.props.id || this.props.name}
          autoComplete={this.props.autoComplete || 'off'}
        />
        { this.props.error && <HelpText type="danger" text={this.props.error} /> }
        {
          React.Children.map(this.props.children, child => {
            if (React.isValidElement(child) && child.type.name === 'HelpText') {
              return React.cloneElement(child, { type: child.props.type || this.props.style, text: child.props.text })
            } else if (this.props.hasIcon && React.isValidElement(child) && child.type.name === 'Icon') {
              return React.cloneElement(child, child.props)
            }
          })
        }
      </div>
    )
  }
}

function HelpText (props) {
  function getClasses () {
    return classnames({
      'help': true,
      'is-primary': props.type === 'primary',
      'is-success': props.type === 'success',
      'is-danger': props.type === 'danger',
      'is-warning': props.type === 'warning',
      'is-info': props.type === 'info'
    });
  };

  return (
    <span className={getClasses()}>{props.text}</span>
  )
}


Input.propTypes = {
  style: PropTypes.oneOf(['normal', 'primary', 'success', 'info', 'warning', 'danger']),
  size: PropTypes.oneOf(['normal', 'small', 'large', 'medium']),
  iconPosition: PropTypes.oneOf(['left', 'right']),
  hasIcon: PropTypes.bool,
  focused: PropTypes.bool,
  loading: PropTypes.bool,
  expand: PropTypes.bool,
  onChange: PropTypes.func
};

HelpText.propTypes = {
  type: PropTypes.oneOf(['normal', 'success', 'danger', 'warning', 'info']),
  text: PropTypes.string
};

module.exports = {
  Input: Input,
  HelpText: HelpText
};