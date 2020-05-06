 import React from "react";

const Greetings = (props) => {
  const gLang = (lang) => {
    if (lang ==="de") return "Hallo";
    if (lang ==="fr") return "Bonjour";
  };
  
  return (
    <div className='container'>
      <p lang={props.lang}> {gLang(props.lang)} {props.children}</p>
    </div>
  );
};

export default Greetings;