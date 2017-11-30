import React from 'react';

function Card (props) {
  return (
    <div className="card">
      {
        props.header && (
          <header className="card-header">
            <p className="card-header-title is-3">{props.header}</p>
            <a className="card-header-icon">
              { props.icon &&  React.cloneElement(props.icon) }
            </a>
          </header>
        )
      }
      {props.children}
      {
        props.footer && (
          <footer className="card-footer">
            {
              (typeof props.footer === 'string')
              ? <span>{props.footer}</span>
              : React.cloneElement(props.footer)
            }
          </footer>
        )
      }
    </div>
  );
}

module.exports = Card;