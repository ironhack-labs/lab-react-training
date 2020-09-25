import React from "react";

export default function SelectWithLabel({ name, value, onChange, options }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{name}</label>
      <select className="custom-select" name={name} value={value} onChange={onChange}>
        {options.map((o, i) => (
          <option value={o.value} key={i}>{o.name}</option>
        ))}
      </select>
      <div className="invalid-feedback">Example invalid custom select feedback</div>
    </div>
  );
}