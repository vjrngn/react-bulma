import React from 'react';
import classnames from 'classnames';

function Label (props) {
  function getClassNames () {
    return classnames({
      'label': true,
      'is-small': props.size === 'small',
      'is-medium': props.size === 'medium',
      'is-large': props.size === 'large'
    });
  };

  return (
    <label className={getClassNames()}>{props.title}</label>
  );
}

Label.propTypes = {
  title: React.PropTypes.string.isRequired
};

module.exports = Label;