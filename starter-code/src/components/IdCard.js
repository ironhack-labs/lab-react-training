import React from "react";

const IdCard = ({
  index,
  lastName,
  firstName,
  gender,
  height,
  birth,
  picture
}) => {
  console.log(birth);
  return (
    <div className="box small-padding">
      <article className="media">
        <figure className="media-left">
          <p className="image is-128x128">
            <img src={picture} alt={firstName} />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p className="is-marginless">
              <strong>First name:</strong> {firstName}
            </p>
            <p className="is-marginless">
              <strong>Last name:</strong> {lastName}
            </p>
            <p className="is-marginless">
              <strong>Gender:</strong> {gender}
            </p>
            <p className="is-marginless">
              <strong>Height:</strong> {(height / 100).toFixed(2)}m
            </p>
            <p className="is-marginless">
              <strong>Birth:</strong> {new Date(birth).toDateString()}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default IdCard;
