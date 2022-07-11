import React from 'react';

export default function IdCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  let coverNum = '*'.repeat(number.slice(0, -4).length) + number.slice(-4);
  let expiration =
    expirationMonth < 10 ? `0${expirationMonth}` : expirationMonth;
  return (
    <>
      <div className="container m-5">
        <div id={type}></div>
        <div
          className=" mw-30 card-rounder"
          style={{ backgroundColor: `${bgColor}` }}
        >
          <h2 style={{ color: `${color}` }}>
            {coverNum.slice(0, 4)} {coverNum.slice(4, 8)}{' '}
            {coverNum.slice(8, 12)} {coverNum.slice(12, 16)}
          </h2>
          <div>
            <p className="left ml-20" style={{ color: `${color}` }}>
              Expires {expiration}/{expirationYear.toString().slice(0, 2)}
              <span className="ml-20">{bank}</span>
            </p>
            <p style={{ color: `${color}` }} className="left ml-20 mb-5 pb-5">
              {owner}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
