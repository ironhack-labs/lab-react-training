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
      class="w-96 h-56 m-auto  rounded-xl relative  shadow-2xl transition-transform transform hover:scale-110"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <div class="w-full px-8 absolute top-8">
        <div class="flex justify-between">
          <div class="">
            <p class="font-light">Name</p>
            <p class="font-medium tracking-widest">{owner}</p>
          </div>
          {type === 'Visa' ? (
            <img
              class="w-14 object-contain "
              src={process.env.PUBLIC_URL + '/img/visa.png'}
              alt=""
            />
          ) : (
            <img
              class="w-14 object-contain"
              src={process.env.PUBLIC_URL + '/img/master-card.svg'}
              alt=""
            />
          )}
        </div>
        <div class="pt-1">
          <p class="font-light">Card Number</p>
          <p class="font-medium tracking-more-wider">
            **** **** **** {number.slice(12, 16)}
          </p>
        </div>
        <div class="pt-6 pr-6">
          <div class="flex justify-between">
            <div class="">
              <p class="font-light text-xs">Expiry</p>
              <p class="font-medium tracking-wider text-sm">
                {expirationMonth}/{expirationYear}
              </p>
            </div>
            <div class="">
              <p class="font-light text-xs">Bank</p>
              <p class="font-medium tracking-wider text-sm">{bank}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
