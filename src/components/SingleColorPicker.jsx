function SingleColorPicker({ identifier, value, updateRGBValues }) {  
  const handleOnChange = (e) => updateRGBValues(identifier, e.target.value)

  return (
    <div
      className="SingleColorPicker"
      style={{
        width: 400,
        display: 'flex',
        textAlign: 'center',
        margin: 10,
        alignItems: 'center',
      }}
    >
      <div
        className="color-box"
        style={
          identifier === 'rValue'
            ? { backgroundColor: `rgb(${value},0,0)` }
            : identifier === 'gValue'
            ? { backgroundColor: `rgb(0,${value},0)` }
            : identifier === 'bValue'
            ? { backgroundColor: `rgb(0,0,${value})` }
            : void 0
        }
      ></div>
      <div style={{ marginLeft: 10 }}>
        <span style={{ fontSize: 18 }}>
          {String(identifier).toUpperCase()[0]}:
        </span>
        <input
          type="number"
          name={identifier}
          min={0}
          max={255}
          value={value}
          onChange={handleOnChange}
          style={{ width: 70, height: 26, fontSize: 16 }}
        />
      </div>
    </div>
  );
}

export default SingleColorPicker