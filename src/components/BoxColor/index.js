
function BoxColor (props) {

    const coloring = props.hex
      ? props.hex
      : `rgb(${props.r},${props.g},${props.b})`;
    return (
      <div
        onChange={props.onChange}
        className={props.class}
        style={{ backgroundColor: coloring }}
      >
        {props.children}
      </div>
    );

};
  
  export default BoxColor;