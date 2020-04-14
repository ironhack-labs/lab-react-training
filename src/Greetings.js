import React from "react";

const Greetings = (props) => {
  const greetLang = (lang) => {
    if (lang ==="de") return "Hallo";
    if (lang ==="en") return "Hello";
    if (lang ==="es") return "Hola";
    if (lang ==="fr") return "Bonjour";
  };
  
  return (
    <div className="box">
      <p lang={props.lang} >{greetLang(props.lang)} {props.children}</p>
    </div>
  );
};

export default Greetings;