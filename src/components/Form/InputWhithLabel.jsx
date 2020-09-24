import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function InputWithLabel({ name, value, onChange }) {
  return (
    <div >
      <label htmlFor={name}>{name}</label>
      <input className="form-control" name={name} type={name} value={value} onChange={onChange} required />
    </div>
  );
}

