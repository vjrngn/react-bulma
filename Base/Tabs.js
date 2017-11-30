import classnames from 'classnames';
import React, { PropTypes } from 'react';

class Tab extends React.Component {
  constructor (props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick (e) {
    e.preventDefault();
    this.props.onClick(e);
  }

  render () {
    const getClasses = () => {
      return classnames({
        'is-active': this.props.active === true,
        'is-disabled': !!this.props.disabled,
        'has-text-capitalized': true
      })
    };

    return (
      <a className={getClasses()} href={this.props.link || '#'} onClick={this.onClick}>
        {this.props.children}
      </a>
    )
  }
}

function Tabs (props) {
  function getClasses () {
    return classnames(props.className, {
      'tabs': true,
      'is-centered': props.position === "center",
      'is-right': props.position === 'right',
      'is-small': props.size === 'small',
      'is-medium': props.size === 'medium',
      'is-large': props.size === 'large',
      'is-boxed': !!props.border,
      'is-toggle': !!props.toggle,
      'is-fullwidth': !!props.expand
    });
  };

  return (
    <div className={getClasses()}>
      <ul>
        {
          React.Children.map(props.children, child => {
            if (React.isValidElement(child) && child.type === Tab) {
              return (
                <li className={child.props.active ? 'is-active' : ''}>
                  {
                    React.cloneElement(child, {
                      active: child.props.active,
                      disabled: child.props.disabled,
                      link: child.props.link,
                      onClick: child.props.onClick,
                    })
                  }
                </li>
              )
            }
          })
        }
      </ul>
    </div>
  )
}

Tab.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  link: PropTypes.string,
  onClick: PropTypes.func
}

Tabs.propTypes = {
  children: PropTypes.array.isRequired,
  position: PropTypes.oneOf(['center', 'right']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  border: PropTypes.bool,
  toggle: PropTypes.bool,
  expand: PropTypes.bool,
}

module.exports = {
  Tabs: Tabs,
  Tab: Tab
}