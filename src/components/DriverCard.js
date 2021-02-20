import React from 'react';

const DriverCard = ({ name, rating, img, car }) => {
  const stars = () => {
    let result = [];
    for(let i = 0; i < 5; i++) {
        if(i < Math.round(rating)) {
            result.push("\u2605")
        } else {
            result.push("\u2606")
        }
    }
    return result.join(' ');
}

  const i7 = {
    display: "flex",
    justifyContent: "center",
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: "#5B3FF8", 
    width: "max", 
    height: "150", 
    borderRadius: "10px",
    margin: "20px",
    padding: "20px",
  }

  return (
    <div style={i7}>
      <img style={{display: 'flex', alignSelf: 'center', width: '100px', height: '100px', borderRadius: "50%"}} alt="" src={img}/>
      <div style={{fontSize: '10px', color: "white", width: "100px", height: '100px'}}>
        <h3>{name}</h3>
        <p>{stars()}</p>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  );
};

export default DriverCard;
