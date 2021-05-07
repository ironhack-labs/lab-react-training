import react from 'react';

export default function CreditCard(props) {
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

  let divStyle = {
    backgroundColor: bgColor,
    color: color,
  };

  let hiddenNum = number;
  hiddenNum = hiddenNum.replace(/\d(?=\d{4})/g, '*');

  let shortMonth = expirationMonth;
  shortMonth = shortMonth.toString().replace(/^(\d)$/, '0$1');

  let shortYear = expirationYear;
  shortYear = shortYear.toString().replace(/\d(?=\d{2})/g, '');

  return (
    <div style={divStyle}>
      <div>{type}</div>
      <div>{hiddenNum}</div>
      <div>
        <p>
          Expires {shortMonth}/{shortYear}
        </p>{' '}
        <p>{bank}</p>
      </div>
      <div>{owner}</div>
      <br />
      <br />
    </div>
  );
}

{
  /* style= 
    {bgColor}
    {color} */
}
