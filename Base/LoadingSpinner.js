import React from 'react';

export default function LoadingSpinner (props) {
  return (
    <span
      style={{ display: props.isLoading ? '' : 'hidden' }}
      className={`fa fa-circle-o-notch fa-spin fa-${props.size}`}
    >
    </span>
  )
}