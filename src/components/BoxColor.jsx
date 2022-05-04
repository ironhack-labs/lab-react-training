function BoxColor(props){
  let { r, g, b } = props

  const divStyle = {
    backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',  
    border: '2px solid black',
    margin: '10px',
    textAlign: 'center',
    padding: '10px',
    width: '200px',
    color: 'white',
  };

  return(
    <div style={divStyle} >
      <p>rbg({r},{g},{b})</p>
    </div>
  )
}

export default BoxColor;