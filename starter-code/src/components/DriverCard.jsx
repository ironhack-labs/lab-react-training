import React from "react";

const DriverCard = (props) => {
  const {name, rating, img, car} = props;

  return (
    <div className="DriverCard">
      <img className="left" src="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&amp;height=428" alt="Driver"/>
      <div className="right">
        <h2>Travis Kalanick</h2>
        <div className="Rating">★★★★☆</div>
        <p>Toyota Corolla Altis - CO42DE</p>
      </div>
    </div>
  );
};

export default DriverCard;