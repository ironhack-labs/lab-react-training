function Rating({ children }) {
  let roundedNumber = Math.round(children);
  console.log('average', roundedNumber);
  console.log(children);
  let star = '';
  if (roundedNumber == 0) return <p>☆☆☆☆☆</p>;

  if (roundedNumber == 1) return <p>★☆☆☆☆</p>;
  if (roundedNumber == 2) return <p>★★☆☆☆</p>;
  if (roundedNumber == 3) return <p>★★★☆☆</p>;
  if (roundedNumber == 4) return <p>★★★★☆</p>;
  if (roundedNumber == 5) return <p>★★★★★</p>;

 
}

export default Rating;
