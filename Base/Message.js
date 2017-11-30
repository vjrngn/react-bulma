import React from 'react';
import classnames from 'classnames';

function Message (props) {
  function getClasses () {
    return classnames(props.className, {
      'message': true,
      'is-dark': props.type === 'dark',
      'is-primary': props.type === 'primary',
      'is-success': props.type === 'success',
      'is-info': props.type === 'info',
      'is-warning': props.type === 'warning',
      'is-danger': props.type === 'danger'
    });
  }

  function getBodyClasses () {
    return classnames({
      'message-body': true,
      'has-content-centered': Boolean(props.hasContentCentered)
    })
  };

  return (
    <article className={getClasses()}>
      {
        props.header && (
          <div className="message-header">
            <p>{props.header}</p>
            { props.dismissible && <button className="delete" onClick={this.props.onDismiss}></button> }
          </div>
        )
      }
      <div className={getBodyClasses()}>
        {props.children}
      </div>
    </article>
  );
}

Message.propTypes = {
  type: React.PropTypes.oneOf(['dark', 'primary', 'success', 'info', 'warning', 'danger']),
  header: React.PropTypes.string,
  dismissible: React.PropTypes.bool,
  hasContentCentered: React.PropTypes.bool
};

module.exports = Message;