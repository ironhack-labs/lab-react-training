export default function Rating(props) {
  const roundNumber = Math.round(Number(props.children));
  return (
    <div className="stars">
      {[...Array(roundNumber)].map((x, i) => (
        <i key={i} class="fas fa-star"></i>
      ))}
      {[...Array(5 - roundNumber)].map((x, i) => (
        <i key={i} class="far fa-star"></i>
      ))}
    </div>
  );
}
