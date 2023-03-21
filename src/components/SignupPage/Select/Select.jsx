const Select = ({ name, id, onChange, value, options, error }) => {
  return (
    <select
      className={`form-select ${error ? 'is-invalid' : ''}`}
      name={name}
      onChange={onChange}
      value={value}
      id={id}
    >
      <option value="">Pick a nationality</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
