function SingleColorPicker({ color, value, onChange }) {
    let backgroundColor;
    if (color === "r") {
      backgroundColor = "red";
    } else if (color === "g") {
      backgroundColor = "green";
    } else {
      backgroundColor = "blue";
    }
  
    return (
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <div
          style={{
            backgroundColor: backgroundColor,
            width: "40px",
            height: "40px",
            borderRadius: "4px",
            marginRight: "10px",
          }}
        ></div>
        <label style={{ fontSize: "18px", fontWeight: "bold", color: "#333" }}>
          {String(color).toUpperCase()}:
          <input
            type="number"
            value={value}
            min={0}
            max={255}
            onChange={onChange}
            style={{
              marginLeft: "10px",
              padding: "5px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              width: "80px",
            }}
          />
        </label>
      </div>
    );
  }
  
  export default SingleColorPicker;