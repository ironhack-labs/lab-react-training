

function BoxColor (props){
    console.log(props)

    const divStyle = {
        backgroundColor: `rgb(${props.r}, ${props.g} , ${props.b} )`,
    }
    // console.log(divStyle)

    return(
      
        <div style={divStyle} className="BoxColor">rgb({props.r},{props.g},{props.b})</div>
    )

}

export default BoxColor;