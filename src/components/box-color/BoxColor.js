function BoxColor(props){

  return (
      <div style={{ backgroundColor: `rgba(${props.r}, ${props.g}, ${props.b})`}} className="mb-1 p-2">
        rgb: ({props.r},{props.g},{props.b} )
      </div>
  );
}

export default BoxColor