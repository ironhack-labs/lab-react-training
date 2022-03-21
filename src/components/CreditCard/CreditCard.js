import React from 'react';
import visa from '../../assets/images/visa.png';
// import mastercard from '../../assets/images/master-card.svg';

const CreditCard = (props) => {
    return (
        <div className='container'>
            <div className="row mx-1">
                <div className='card' style={{ backgroundColor: props.bgColor, color: props.color }}>
                    <div className='text-end me-4 mt-2 mb-4'>
                        {props.type === 'Visa'
                            ? (<img src={visa} style={{ width: '60px' }}></img>)
                            : (<img src=''></img>)
                        }
                    </div>
                    <div>
                        <p className='mt-2' style={{ fontSize: '35px' }}>•••• •••• •••• {props.number.slice(-4)}</p>
                        <p className='text-start my-2'>Expires {props.expirationMonth}/{props.expirationYear} &nbsp;&nbsp;&nbsp; {props.bank}</p>
                        <p className='text-start'>{props.owner}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CreditCard;
