const Boxcolor = (props) => {
  const divStyle = {
    backgroundColor: `rgb(${props.r},${props.g},${props.b} )`,
    width: '200px',
    height: '200px',
    // top bottom left right
    padding: '2rem 8rem',
  };

  return <div style={divStyle}>rgb(255,0,0) #ff0000</div>;
};

export default Boxcolor;
