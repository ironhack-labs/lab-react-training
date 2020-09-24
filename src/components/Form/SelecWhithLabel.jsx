import React from "react";

export default function SelectWithLabel({ name, value, onChange, options }) {
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <select name={name} value={value} onChange={onChange}>
        {options.map((o, i) => (
          <option value={o.value} key={i}>{o.name}</option>
        ))}
      </select>
    </div>
  );
}