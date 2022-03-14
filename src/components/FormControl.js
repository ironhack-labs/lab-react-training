function FormControl(props) {
  return (
    <div className="mb-3">
      <label htmlFor={props.id} className="form-label">
        {props.label}
      </label>
      <input
        id={props.id}
        className="form-control"
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        style={props.style}
      />
    </div>
  );
}

export default FormControl;
