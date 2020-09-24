import React from "react";
import './InputNumber.css'

export default function InputNumber({ name, value, onChange }) {
  return (
    <div className="box">
      <p className={name}></p>
      <span><b>{name}: </b></span>
      <input name={name} type="number" min="0" max="250" value={value} onChange={onChange} required />
    </div>
  );
}