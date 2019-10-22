import React from "react";

const Greetings = ({ children, lang }) => {
  let hello = "";
  switch (lang) {
    case "de":
      hello = "Hallo";
      break;
    case "fr":
      hello = "Bonjour";
      break;
    case "es":
      hello = "Hola";
      break;
    default:
      hello = "Hello";
      break;
  }
  return (
    <div className="box">
      <p>
        {hello} {children}
      </p>
    </div>
  );
};

export default Greetings;