import React from 'react';
import './index.css'

const Rating = props => {
  let str;
  if (Math.floor(props.children) === 0) {
    str = "☆☆☆☆☆"
  }
  if (Math.floor(props.children) === 1) {
    str = "★☆☆☆☆"
  }
  if (Math.floor(props.children) === 2) {
    str = "★★☆☆☆"
  }
  if (Math.floor(props.children) === 3) {
    str = "★★★☆☆"
  }
  if (Math.floor(props.children) === 4) {
    str = "★★★★☆"
  }
  if (Math.floor(props.children) === 5) {
    str = "★★★★★"
  }
  return <h1>{str}</h1>
}

export default Rating