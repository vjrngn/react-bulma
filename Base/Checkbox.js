import React from 'react';

var Checkbox = function Checkbox (props) {
  return (
    <div className="field">
      <div className="control">
        <label className="checkbox" disabled={props.disabled}>
          <input type="checkbox" name={props.name} onChange={props.onChange} checked={props.checked} disabled={props.disabled} />
          {props.title}
        </label>
      </div>
    </div>
  )
}

Checkbox.propTypes = {
  title: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func,
  checked: React.PropTypes.bool,
  disabled: React.PropTypes.bool
};

module.exports = Checkbox;