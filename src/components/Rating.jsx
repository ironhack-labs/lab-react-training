import React from 'react'
import './Rating.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Rating(props) {
  return (
    <div className="rating">
      {props.children}
      <FontAwesomeIcon icon="check-square" />
    </div>
  )
}

export default Rating