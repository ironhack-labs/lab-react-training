function Rating({ children }) {
//   let starRating = "☆☆☆☆☆";
//   if (children >= 0 && children <= 0.49) {
//     starRating = "☆☆☆☆☆";
//   } else if (children <= 1.49) {
//     starRating = "★☆☆☆☆";
//   } else if (children <= 2.49) {
//     starRating = "★★☆☆☆";
//   } else if (children <= 3.49) {
//     starRating = "★★★☆☆";
//   } else if (children <= 4.49) {
//     starRating = "★★★★☆";
//   } else {
//     starRating = "★★★★★";
//   }

let starRating = ""
for (let star=1; star<=5; star++) {
    starRating += star <= Math.round(children)? "★":"☆";
}
  return (
    <div className="rating">
      <p className="details">{starRating}</p>
    </div>
  );
}

export default Rating;
