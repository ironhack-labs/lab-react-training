import React from "react";

let starArray = function(blackStars) {
  let arr = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= blackStars) {
      arr.push("★");
    } else {
      arr.push("☆");
    }
  }
  return arr;
};

function Rating(props) {
  // console.log(props.children);
  const numBlackStars = Math.round(props.children);
  // console.log(numBlackStars);
  const starArr = starArray(numBlackStars);
  const style = {
    display: "flex",
    flexDirection: "row"
  };
  return (
    <div>
      <div style={style}>
        {starArr.map(star => {
          return <h1>{star}</h1>;
        })}
      </div>
    </div>
  );
}

export default Rating;
