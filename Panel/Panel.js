import React, { PropTypes } from 'react';

function Panel (props) {
  return (
    <nav className="panel">
      <p className="panel-heading">{props.title}</p>
      {
        React.Children.map(props.children, child => {
          if (React.isValidElement(child) && child.type === PanelTabs) {
            return React.cloneElement(child)
          } else {
            return React.cloneElement(child)
          }
        })
      }
    </nav>
  )
}

function PanelTabs (props) {
  return (
    <div className="panel-tabs">
      {
        React.Children.map(props.children, child => {
          if (React.isValidElement(child) && child.type.name === 'Tab') {
            return React.cloneElement(child, {
              active: child.props.active,
              disabled: child.props.disabled,
              link: child.props.link,
              onClick: child.props.onClick,
            })
          }
        })
      }
    </div>
  )
}

Panel.propTypes = {
  title: PropTypes.string.isRequired
}

PanelTabs.propTypes = {
  children: PropTypes.element.isRequired
}

module.exports = {
  Panel: Panel,
  PanelTabs: PanelTabs
}
