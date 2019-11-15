import React from "react";

const GreetingCard = ({ language, greeting, firstName }) => (
  <div className="cards">
    <p>
      {greeting} my name is {firstName}, I speak {language}
    </p>
  </div>
);

export default GreetingCard;
