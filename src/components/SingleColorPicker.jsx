function SingleColorPicker({ color, value, onChange }) {
  return (
    <div style={styles.container}>
      <label htmlFor={`${color}Value`} style={styles.label}>
        {color.toUpperCase()}:
      </label>
      <input
        id={`${color}Value`}
        type="number"
        min="0"
        max="255"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={styles.input}
      />
      <div
        style={{
          ...styles.colorBox,
          backgroundColor:
            color === "r"
              ? `rgb(${value}, 0, 0)`
              : color === "g"
              ? `rgb(0, ${value}, 0)`
              : `rgb(0, 0, ${value})`,
        }}
      />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  label: {
    marginRight: "10px",
  },
  input: {
    width: "60px",
    marginRight: "10px",
  },
  colorBox: {
    width: "30px",
    height: "30px",
    border: "1px solid #ccc",
  },
};

export default SingleColorPicker;
