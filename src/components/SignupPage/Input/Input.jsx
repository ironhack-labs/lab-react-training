const Input = ({ type = 'text', value, onChange, id, name, error }) => {
  const commonProps = {
    value,
    onChange,
    id,
    name,
    className: `form-control ${error ? 'is-invalid' : ''}`,
  };
  return <input type={type} {...commonProps} />;
};

export default Input;
