import React from 'react';
import classnames from 'classnames';

function Notification (props) {
  function getClasses () {
    return classnames({
      'notification': true,
      'is-hidden': Boolean(props.hidden),
      'is-primary': props.type === 'primary',
      'is-success': props.type === 'success',
      'is-info': props.type === 'info',
      'is-warning': props.type === 'warning',
      'is-danger': props.type === 'danger',
    })
  }

  return (
    <div className={getClasses()}>
      { props.dismissible && <button onClick={props.onDismiss} className="delete is-small"></button> }
      { props.message }
    </div>
  )
}

module.exports = Notification;
