function BoxColor(props) {
  const style = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})` // attention erreur car en js on écrit pas 'background-color' comme en css
  };

    return (
      <div
        className="BoxColor" style={style}
      >
      {`rgb(
        ${props.r},
        ${props.g},
        ${props.b}
        )`
      }
      </div>
    )
}
  
export default BoxColor;