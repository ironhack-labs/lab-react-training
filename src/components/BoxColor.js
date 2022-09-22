import React from 'react'

const BoxColor = (props) => {
    console.log(props);
    const {r, g, b} = props;
    const estilos = {background: `rgb(${r}, ${g}, ${b})`};
  return (
    <div style={estilos} className="color">
        <p>rgb({r}, {g}, {b})</p>
    </div>
  )
}

export default BoxColor