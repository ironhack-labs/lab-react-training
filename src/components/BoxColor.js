function BoxColor(props) {
    const divStyle = ( r, g, b ) => `rgb(${r},${g},${b})`;
    const color = { backgroundColor: divStyle(props.r, props.g, props.b) }
    const hex1 = (+props.r).toString(16);
    const hex2 = (+props.g).toString(16);
    const hex3 = (+props.b).toString(16);

    return (
      <div style={color} className="BoxColor">
        <p>
          rgb({props.r},{props.g},{props.b})
          <br />
          #{hex1}{hex2}{hex3}
        </p>
      </div>
    );
}

export default BoxColor;