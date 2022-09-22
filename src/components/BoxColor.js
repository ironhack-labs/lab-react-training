import React from 'react'

const BoxColor = (props) => {
    const {r, g, b} = props
    console.log(props)

    const estilos = {background: `rgb(${r}, ${g}, ${b})`}
  return (
    <div style={estilos} className='color'>{`rgb(${r}, ${g}, ${b})`}</div>
  )
}

export default BoxColor