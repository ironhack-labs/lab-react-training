function SingleColorPicker(props) {
  const handleChange = (event) => {
    console.log(event.target);
    console.log(event.target.value);
    props.callBack(props.color, Number(event.target.value));
  };

  const rgbValue = `rgb(${props.color === 'r' ? props.value : 0}, ${
    props.color === 'g' ? props.value : 0
  }, ${props.color === 'b' ? props.value : 0})`;

  return (
    <div style={{ display: 'flex', marginBottom: '10px' }}>
      <div
        style={{
          backgroundColor: rgbValue,
          width: '30px',
          height: '30px',
          border: '1px solid black',
        }}
      ></div>
      <div>
        <input
          type="number"
          onChange={handleChange}
          value={props.value}
        ></input>
      </div>
    </div>
  );
}

export default SingleColorPicker;
