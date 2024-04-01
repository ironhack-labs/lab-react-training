import React from "react";

const Information = ({ lastName, firstName, gender, height, birth }) => {
  const birthday = new Date(birth).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short', 
    day: '2-digit', 
    year: 'numeric'
  });
  return (
    <div className="information_IdCard">
      <p><b>First name</b>: {firstName}</p>
      <p><b>Last name</b>: {lastName}</p>
      <p><b>Gender</b>: {gender}</p>
      <p><b>Height</b>: {height}</p>
      <p><b>Birth</b>: {birthday}</p>
    </div>
  );
}

export default Information;