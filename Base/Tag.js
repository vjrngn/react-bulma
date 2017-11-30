import classnames from 'classnames';
import React, { PropTypes } from 'react';

function Tag (props) {
  function dismissibleClasses () { 
    return classnames({ 
      'delete': true, 
      'is-small': props.size !== 'large'
    });
  }

  function getClasses () {
    return classnames({
      'tag': true,
      'is-medium': props.size === 'medium',
      'is-large': props.size === 'large',
      'is-white': props.type === 'white',
      'is-light': props.type === 'light',
      'is-dark': props.type === 'dark',
      'is-black': props.type === 'black',
      'is-primary': props.type === 'primary',
      'is-success': props.type === 'success',
      'is-warning': props.type === 'warning',
      'is-info': props.type === 'info',
      'is-danger': props.type === 'danger',
      'default': !props.type || props.type === 'normal',
    })
  };

  return (
    <span className={getClasses()}>
      {props.children}
      {
        props.dismissible && <button className={dismissibleClasses()} onClick={props.onClick} />
      }
    </span>
  )
}

Tag.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  dismissible: PropTypes.bool,
  onClick: PropTypes.func
}

module.exports = Tag;