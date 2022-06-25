const Rating = ({children}) => {
  const rating = Math.round(parseFloat(children));
  let stars = ``
  
  for (let i = 0; i < 5; i++) {
    stars.length < rating ? stars += `★` : stars += `☆`;
  }

  return (
    <h2>{stars}</h2>
  );
}

export default Rating;