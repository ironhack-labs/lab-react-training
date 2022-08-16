import React from 'react'

function BoxColor(props) {
    const {r, g, b} = props;
  return (
    <div>
        <h1>rgb({r},{g},{b})</h1>
    </div>
  )
}

export default BoxColor