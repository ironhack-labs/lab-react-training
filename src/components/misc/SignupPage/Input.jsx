const Input = ({
     value, onChange,
    id, name, placeholder,
    error,
  }) => {
    const commonProps = {
      value, onChange, id, name, placeholder,
      className: `form-control ${error ? 'is-invalid' : ''}`
    }
    return (
      <input
        {...commonProps}
      />
    )
  }
  
  export default Input;