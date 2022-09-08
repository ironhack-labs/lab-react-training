import { useEffect, useState } from 'react';
import visa from '../assets/images/visa.png';
import masterCard from '../assets/images/mastercard.png';

const CreditCard = (props) => {
  const [credit, setCredit] = useState('');
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [color, setColor] = useState('');
  const typeCredit = () => {
    switch (props.type) {
      case 'Visa':
        setCredit(visa);
        setHeight(20);
        setWidth(60);
        setColor('white');
        break;
      case 'Master Card':
        setCredit(masterCard);
        setHeight(30);
        setWidth(60);
        setColor('black');
        break;

      default:
        break;
    }
  };
  useEffect(() => {
    typeCredit();
  }, []);
  return (
    <div
      className="p-3 m-3"
      style={{
        background: props.bgColor,
        color: color,
        borderRadius: 5,
        width: 320,
        height: 190,
      }}
    >
      <div className="d-flex justify-content-end m-2 ">
        <img
          style={{ width: width, height: height }}
          src={credit}
          alt={credit}
        />
      </div>
      <div className='d-flex justify-content-center m-3'>
        <p className="h2">{'***  '.repeat(3)}{props.number.substr(12, 16)}</p>
      </div>
      <div className='d-flex justify-content-start'>
        <div className="d-flex flex-row">
          <p>
            Expires{'  '.repeat(1)}
            {props.expirationMonth.toString().length === 1
              ? `0${props.expirationMonth}`
              : props.expirationMonth}
            /{props.expirationYear}
            {'   '+ props.bank}
            <div>{props.owner}</div>
          </p>
        </div>
      </div>
    </div>
  );
};
export default CreditCard;
