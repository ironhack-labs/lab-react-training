import React from "react";

export default function CreditCard(props) {

  const {r, g, b} = hexToRgb(props.bgColor);
  
  const txtColor = defineTxtColor(r, g, b);

  const mainDivStyle = {
    background: `${props.bgColor}`,
    height: 190,
    width: 400,
    borderRadius: 15,
    position: "relative",
    color: `rgb(${txtColor.r},${txtColor.g},${txtColor.b})`,
    margin: "20px",
    float: "left",
  };

  const divLogoStyle = {
    height: 60,
  };

  const imgStyle = {
    height: 20,
    width: 50,
    float: "right",
    margin: "20px",
  };

  const numberStyle = {
    fontSize: "xx-large",
    textAlign: "center",
  };

  const dataDivStyle = {
    margin: "0% 0% 0% 5%",
    fontSize: "18px",
  };
  const expiresDivStyle = {
    width: "30%",
    float: "left",
  };

  return (
    <div className="CreditCard" style={mainDivStyle}>
      <div style={divLogoStyle}>
        <img src={urlLogo(props.type)} alt={props.type} style={imgStyle} />
      </div>
      <div style={numberStyle}>
        <span> **** </span>
        <span> **** </span>
        <span> **** </span>
        <span> {props.number.slice(-4)} </span>
      </div>
      <div style={dataDivStyle}>
        <div>
          <div style={expiresDivStyle}>
            Expires {("0" + props.expirationMonth).slice(-2)}/
            {String(props.expirationYear).slice(-2)}
          </div>
          <div>{props.bank}</div>
        </div>
        <div>{props.owner}</div>
      </div>
    </div>
  );

  function urlLogo(type) {
    // Las rutas son desde "public"
    if (type === "Visa") return "./img/visa.png";
    return "./img/master-card.svg";
  }

  // https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color
  function defineTxtColor(r, g, b) {
    const sum = parseInt(r) * 0.299 + parseInt(g) * 0.587 + parseInt(b) * 0.114;
    if ( sum > 186)
      return { r: 0, g: 0, b: 0 };
    return { r: 255, g: 255, b: 255 };
  }

  // https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }
}
