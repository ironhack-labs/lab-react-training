
//★☆
function Rating(props) {
  const realRating = Math.round(props.children);

  return (
    <h1>{"★".repeat(realRating) + "☆".repeat(5 - realRating)}</h1>
  )
}

export default Rating