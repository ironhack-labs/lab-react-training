import React from 'react';

export default function IdCard({
  firstName,
  lastName,
  gender,
  height,
  birth,
  picture,
}) {
  return (
    <>
      <div className="user mw-50 m-5">
        <div>
          <div>
            <img
              className="image m-5 mb-2"
              src={picture}
              alt="Girl in a jacket"
              width="130"
              height="130"
            />
          </div>
        </div>
        <div>
          <div className="left m-5">
            <div>
              <span className="idcard">
                <strong>First name:</strong> {firstName}
              </span>
            </div>
            <div>
              <span className="idcard">
                <strong>Last name:</strong> {lastName}
              </span>
            </div>
            <div>
              <span className="idcard">
                <strong>Gender:</strong> {gender}
              </span>
            </div>
            <div>
              <span className="idcard">
                <strong>Height:</strong> {height}
              </span>
            </div>
            <div>
              <span className="idcard">
                <strong>Birth:</strong> {birth.toString().slice(0, 16)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
