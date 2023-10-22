/* eslint-disable react/prop-types */
function RandomComponent({min,max}) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  return <div>Random Number: {randomNum}</div>;
}
export default RandomComponent;