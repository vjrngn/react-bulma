import React from 'react';
import classnames from 'classnames';

import { HelpText } from './Input';

function Select (props) {
  function getClassNames () {
    return classnames({ 
      'select': true,
      'is-small': props.size === 'small',
      'is-medium': props.size === 'medium',
      'is-large': props.size === 'large'
    });
  }
  return (
    <div className="control">
      <div className={getClassNames()}>
        <select
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          disabled={props.disabled}
          defaultValue={props.value}
        >
          {
            React.Children.map(props.children, child => {
              if (React.isValidElement(child) && child.type === 'option') {
                return React.cloneElement(child, child.props)
              }
            })
          }
        </select>
      </div>
      { props.error && <HelpText type="danger" text={props.error} /> }
    </div>
  )
}

Select.propTypes = {
  onChange: React.PropTypes.func
};

module.exports = Select;