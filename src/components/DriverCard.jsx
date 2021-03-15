import React from 'react';

const DriverCard = (props) => {
    var num = Math.round(props.rating)
    var rating = '';
    if ( num === 0) {
        rating = 
            <div>
                <img src="/img/empty.png" alt=""/>
                <img src="/img/empty.png" alt=""/>
                <img src="/img/empty.png" alt=""/>
                <img src="/img/empty.png" alt=""/>
                <img src="/img/empty.png" alt=""/>
            </div>
    }
    if ( num === 1) {
        rating =
            <div>
                <img src="/img/full.png" alt=""/>
                <img src="/img/empty.png" alt=""/>
                <img src="/img/empty.png" alt=""/>
                <img src="/img/empty.png" alt=""/>
                <img src="/img/empty.png" alt=""/>
            </div>
    }
    if ( num === 3) {
        rating =
            <div>
                <img src="/img/full.png" alt=""/>
                <img src="/img/full.png" alt=""/>
                <img src="/img/empty.png" alt=""/>
                <img src="/img/empty.png" alt=""/>
                <img src="/img/empty.png" alt=""/>
            </div>
    }
    if ( num === 3) {
        rating = 
            <div>
                <img src="/img/full.png" alt=""/>
                <img src="/img/full.png" alt=""/>
                <img src="/img/full.png" alt=""/>
                <img src="/img/empty.png" alt=""/>
                <img src="/img/empty.png" alt=""/>
            </div>
    }
    if ( num === 4) {
        rating =
            <div>
                <img src="/img/full.png" alt=""/>
                <img src="/img/full.png" alt=""/>
                <img src="/img/full.png" alt=""/>
                <img src="/img/full.png" alt=""/>
                <img src="/img/empty.png" alt=""/>
            </div>
    }
    if ( num === 5) {
        rating = 
            <div>
                <img src="/img/full.png" alt=""/>
                <img src="/img/full.png" alt=""/>
                <img src="/img/full.png" alt=""/>
                <img src="/img/full.png" alt=""/>
                <img src="/img/full.png" alt=""/>
            </div>
    }
  return (
      <div style={{padding: "10px"}}>
    <div style={{ backgroundColor: 'purple', display: 'flex' , flexDirection: "row", justifyContent: "center", borderRadius: "5%"}}>
      <div>
        <img src={props.img} alt="" style={{ width: '60px', height: '60px', borderRadius: '50%'}} />
      </div>
      <div>
        <div>{props.name}</div>
        <div>{rating}</div>
        <div>{props.car.model} - {props.car.licensePlate}</div>
      </div>
    </div>
    </div>
  );
};

export default DriverCard;
