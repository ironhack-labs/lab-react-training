import React from "react";

const IdCard = props => {
  return (
    <article className="id-card">
      <div>
        <img src={props.picture} alt="" />
      </div>{" "}
      <div className="id-card-info">
        <p>
          {" "}
          <strong> First name: </strong> {props.firstName}{" "}
        </p>{" "}
        <p>
          {" "}
          <strong> Last name: </strong> {props.lastName}{" "}
        </p>{" "}
        <p>
          {" "}
          <strong> Gender: </strong> {props.gender}{" "}
        </p>{" "}
        <p>
          {" "}
          <strong> Height: </strong> {props.height}m{" "}
        </p>{" "}
        <p>
          {" "}
          <strong> Birth: </strong> {props.birth.toDateString()}{" "}
        </p>{" "}
      </div>{" "}
    </article>
  );
};

export default IdCard;
