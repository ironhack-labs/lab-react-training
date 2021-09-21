function BoxColor(props) {
  const color = `rgb(${props.r}, ${props.g}, ${props.b})`
  return (
    <div className="BoxColor">
      <div style={{width: "800px", height: "200px", backgroundColor: color}}>
        {color}
      </div>
    </div>
  );
}

export default BoxColor;
