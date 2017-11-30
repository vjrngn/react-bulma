import classnames from 'classnames';
import React, { Component } from 'react';

class Menu extends Component {
  render () {
    return (
      <aside className="menu">
        {
          React.Children.map(this.props.children, child => {
            if (React.isValidElement(child)) {
              if (child.type === MenuList) {
                return React.cloneElement(child, child.props)
              } else if (child.type === MenuLabel) {
                return React.cloneElement(child, child.props)
              }
            }
          })
        }
      </aside>
    )
  }
}

function MenuLabel (props) {
  return (
    <p className="menu-label"> {props.title} </p>
  )
}

class MenuItem extends Component {
  render () {
    return (
      <li className="is-uppercase">
        <Link 
          to={this.props.to || '#'} 
          activeClassName="is-active" 
          className={classnames({ 'has-sub-menu': !!this.props.hasSubMenu })}
          onlyActiveOnIndex >
            {this.props.title}
          </Link>
          <div>{this.props.children}</div>
      </li>
    )
  }
}

function MenuList (props) {
  return (
    <ul className="menu-list">
      {
        React.Children.map(props.children, child => {
          if (React.isValidElement(child) && (child.type === MenuItem || child.type === MenuLabel)) {
            return React.cloneElement(child, child.props)
          }
        })
      }
    </ul>
  )
}

module.exports = {
  Menu: Menu,
  MenuLabel: MenuLabel,
  MenuItem: MenuItem,
  MenuList: MenuList
}