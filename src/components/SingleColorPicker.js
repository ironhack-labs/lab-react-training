function SingleColorPicker (props) {
    const { color, value, onChange } = props;
  
    const getBgColorValue = (color) => {
      if (color = 'r') {return `rgb(${value}, 0, 0)`}
    else if (color = 'g'){return `rgb(0, ${value}, 0)`}
    else if (color =  'b') {return `rgb(0, 0 , ${value})`}
      }
    
  
    return (
      <div style={{ display: 'flex' }}>
        <div
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: getBgColorValue(),
          }}
        ></div>
        <p>{color}</p>
        <input value={value} onChange={onChange} type="number" />
      </div>
    );
  }

export default SingleColorPicker