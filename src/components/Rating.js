const Rating = ({ children }) => {
  let roundedNumber = Math.round(Number(children));
  let stars = '';
  if(roundedNumber === 1) {
      stars = <p>★☆☆☆☆</p>
  }
  if(roundedNumber === 2) {
      stars = <p>★★☆☆☆</p>
  }
  if(roundedNumber === 3) {
      stars = <p>★★★☆☆</p>
  }
  if(roundedNumber === 4) {
      stars = <p>★★★★☆</p>
  }
  if(roundedNumber === 5) {
      stars = <p>★★★★★</p>
  }
  return (
    <div>
        {stars}
    </div>
  )
}

export default Rating