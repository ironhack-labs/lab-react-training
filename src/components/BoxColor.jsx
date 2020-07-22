import React from 'react'

const BoxColor = (props) => {
    function toHexa(nb)
    {
        if(nb===0) return'00';
        else {
        return Number(nb).toString(16);}
    }
    let hexadec = `#${toHexa(props.r)}${toHexa(props.g)}${toHexa(props.b)}`
    return (
        <div
        style={{
        border: '1px solid black',
        backgroundColor: hexadec
      }}
      >
      rgb({props.r},{props.g},{props.b})
      {hexadec}     
        </div>
    )
}

export default BoxColor
