import React from "react";
import "../App.css";

function IdCard({ firstName, lastName, gender, height, birth, picture }) {
  let date = birth.toString().split(" ").slice(0, 4).join(" ");

  return (
    <div className="card">
      <div className="profile-image">
        <img src={picture} alt="selfie" />
      </div>
      <div className="each-card"> 
      <div className="flex">
        <p>
          <b>First name:</b> {firstName}
        </p>
      </div>

      <div className="flex">
        <p>
          <b>Last name:</b> {lastName}
        </p>
      </div>
      <div className="flex">
        <p>
          <b>Gender: {gender}</b>
        </p>
      </div>

      <div className="flex">
        <p>
          <b>Height: {height}</b>
        </p>
      </div>

      <div className="flex">
        <p>
          <b>birth: {date}</b>
        </p>
      </div>
      </div>
    </div>
  );
}

export default IdCard;
