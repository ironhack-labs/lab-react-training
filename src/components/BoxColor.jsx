function BoxColor(props) {
  // another option: passing the css value inside a variable, and after passing to inline style.
  //   const myStyle = {
  //     backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
  //   };

  return (
    <div
      className="box-color"
      style={{ backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})` }}
    >
      <p>
        rgb({props.r}, {props.g}, {props.b})
      </p>
    </div>
  );
}

export default BoxColor;
