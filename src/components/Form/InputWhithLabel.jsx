import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function InputWithLabel({ name, value, onChange, message }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{name}</label>
      <input className="form-control" name={name} type={name} value={value} onChange={onChange} required />
      <div className="invalid-feedback">
        {message}
      </div>
    </div>
  );
}

