import React from 'react';

const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  return (
    <div
      className="w-96 h-56 m-auto  rounded-xl relative  shadow-2xl transition-transform transform hover:scale-110"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <div className="w-full px-8 absolute top-8">
        <div className="flex justify-between">
          <div className="">
            <p className="font-light">Name</p>
            <p className="font-medium tracking-widest">{owner}</p>
          </div>
          {type === 'Visa' ? (
            <img
              className="w-14 object-contain "
              src={process.env.PUBLIC_URL + '/img/visa.png'}
              alt=""
            />
          ) : (
            <img
              className="w-14 object-contain"
              src={process.env.PUBLIC_URL + '/img/master-card.svg'}
              alt=""
            />
          )}
        </div>
        <div className="pt-1">
          <p className="font-light">Card Number</p>
          <p className="font-medium tracking-more-wider">
            **** **** **** {number.slice(12, 16)}
          </p>
        </div>
        <div className="pt-6 pr-6">
          <div className="flex justify-between">
            <div className="">
              <p className="font-light text-xs">Expiry</p>
              <p className="font-medium tracking-wider text-sm">
                {expirationMonth}/{expirationYear}
              </p>
            </div>
            <div className="">
              <p className="font-light text-xs">Bank</p>
              <p className="font-medium tracking-wider text-sm">{bank}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
