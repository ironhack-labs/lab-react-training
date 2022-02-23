
//Iteration 4 | Component: BoxColor
// https://reactjs.org/docs/dom-elements.html#style
function BoxColor(props) {
    const {r, g, b} = props
    const divStyle = {
        backgroundColor: `rgb(${r},${g},${b})`,
      };
  return (
    <div className='box-color' style={divStyle}>
            rgb({r}, {g}, {b})
    </div>
  );
}

export default BoxColor;
