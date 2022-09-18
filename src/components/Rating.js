function Rating({ children }) {
  const roundedNumber = Math.round(children);
  //console.log(roundedNumber);
  switch (roundedNumber) {
    case 0:
      return <img src="images/No-Stars.PNG" />;
    case 1:
      return <img src="images/One-Star.PNG" />;
    case 2:
      return <img src="images/Two-Stars.PNG" />;
    case 3:
      return <img src="images/Three-Stars.PNG" />;
    case 4:
      return <img src="images/Four-Stars.PNG" />;
    case 5:
      return <img src="images/Five-Stars.PNG" />;
    default:
      return <img src="images/No-Stars.PNG" />;
  }
}

export default Rating;
