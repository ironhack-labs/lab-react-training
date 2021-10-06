import React from 'react'

function Rating(props) {
  const { children } = props;
  if (Math.round(children) === 0) {
    return (<div style={{ fontSize: "3rem" }}>☆☆☆☆☆</div>)
  } else if (Math.round(children) === 1) {
    return (<div style={{ fontSize: "3rem" }}>★☆☆☆☆</div>)
  } else if (Math.round(children) === 2) {
    return (<div style={{ fontSize: "3rem" }}>★★☆☆☆</div>)
  } else if (Math.round(children) === 3) {
    return (<div style={{ fontSize: "3rem" }}>★★★☆☆</div>)
  } else if (Math.round(children) === 4) {
    return (<div style={{ fontSize: "3rem" }}>★★★★☆</div>)
  } else if (Math.round(children) === 5) {
    return (<div style={{ fontSize: "3rem" }}>★★★★★</div>)
  } else {
    return (<p>Estas fuera de rango</p>)
  }
}

export default Rating
