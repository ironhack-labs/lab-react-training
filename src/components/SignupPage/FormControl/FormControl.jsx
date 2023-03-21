const FormControl = ({ children, text, htmlFor, error }) => {
  return (
    <div className="FormControl mb-3">
      <label htmlFor={htmlFor} className="form-label">
        {text}
      </label>
      {children}
      <div className="invalid-feedback">{error}</div>
    </div>
  );
};

export default FormControl;
