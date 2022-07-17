import React from 'react';
import visaPic from '../assets/images/visa.png';
import masterPic from '../assets/images/master-card.svg';

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
  let logo = '';

  switch (type) {
    case 'Visa':
      logo = visaPic;
      break;
    case 'Master Card':
      logo = masterPic;
      break;
  }

  let coverNum = '*'.repeat(number.slice(0, -4).length) + number.slice(-4);
  let expiration =
    expirationMonth < 10 ? `0${expirationMonth}` : expirationMonth;
  return (
    <>
      <div className="container m-5">
        <div
          className=" mw-30 card-rounder"
          style={{ backgroundColor: `${bgColor}` }}
        >
          <img
            src={logo}
            alt="bank logo"
            height="25px"
            className="logo-banco py-5 right"
          />

          <h2 style={{ color: `${color}` }} className="mt-50 ml-20">
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
