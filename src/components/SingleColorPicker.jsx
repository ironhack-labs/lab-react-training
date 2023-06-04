function SingleColorPicker(props) {
  return (
    <div>
      <div>
        <input
          type="number"
          max={255}
          min={0}
          value={props.value}
          onChange={(e) => {
            props.onChange(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default SingleColorPicker;
