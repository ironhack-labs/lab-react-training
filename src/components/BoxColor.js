import React from 'react'

class BoxColor extends React.Component {
    
    render() {
    const {r, g, b} = this.props
    const divStyle = {
        backgroundColor: `rgb(${r},${g},${b})`,
        padding: '50px',
        border: '3px solid black',
        marginBottom: '10px'
    }
     return (
         <div className='boxColor' style={divStyle}> rgb({r},{g},{b}) </div>
     )
    }   
}


export default BoxColor
