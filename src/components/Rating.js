function Rating({ children }) {
  const roundedNumber = Math.round(children);
  //console.log(roundedNumber);
  switch (roundedNumber) {
    case 0:
      return <img alt="none" src="images/No-Stars.PNG" />;
    case 1:
      return <img alt="one" src="images/One-Star.PNG" />;
    case 2:
      return <img alt="two" src="images/Two-Stars.PNG" />;
    case 3:
      return <img alt="three" src="images/Three-Stars.PNG" />;
    case 4:
      return <img alt="four" src="images/Four-Stars.PNG" />;
    case 5:
      return <img alt="five" src="images/Five-Stars.PNG" />;
    default:
      return <img alt="none" src="images/No-Stars.PNG" />;
  }
}

export default Rating;
