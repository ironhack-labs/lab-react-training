function BoxColor(props) {
  //   const divStyle = {
  //     WebkitTransition: 'all', // note the capital 'W' here
  //     msTransition: 'all' // 'ms' is the only lowercase vendor prefix
  //     backgroungcolor: 'red',
  //   };
  //   console.log(divStyle);
  //   console.log('>PROPS: ', props);
  //   console.log('>> R: ', props.r);
  //   console.log('JUNÇÃO: ', `rgb(${props.r.toString()},${props.g},${props.b})`);
  const rgb = `rgb(${props.r},${props.g},${props.b})`;
  const divStyle = {
    backgroundColor: rgb,
  };

  function rgbToHex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  const hex = rgbToHex(props.r, props.g, props.b);

  return (
    <div style={divStyle} className="rectangle">
      <p>{rgb}</p>
      <p>{hex}</p>
    </div>
  );
}

export default BoxColor;
