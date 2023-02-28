import React from 'react'

function BoxColor(props) {

    const {r, g, b} = props;
    const divStyle = {
        backgroundColor:`rgb( ${r} , ${g} , ${b} )`,
    };
  return (
    <div style={divStyle}>{divStyle.backgroundColor}</div>
  )
}
export default BoxColor

