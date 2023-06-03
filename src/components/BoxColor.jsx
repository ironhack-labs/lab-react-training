function BoxColor( {r,g,b} ) {
    const rgb = `rgb(${r},${g},${b})`
    return (
      <div className="square" style={{backgroundColor: `${rgb}`}}>
        <p>{rgb}</p>
      </div>
    );
  }
  
  export default BoxColor;