function BoxColor(props){
  const divStyle = {
      'background-color': `rgba(${props.r}, ${props.g}, ${props.b})`,
    };
  
  return (
      <div style={divStyle} className="mb-1 p-2">
        rgb: ({props.r},{props.g},{props.b} )
      </div>
  );
}

export default BoxColor