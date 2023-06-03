export default function Rating(props) {
  const rating = {
    0: '☆ ☆ ☆ ☆ ☆',
    1: '★ ☆ ☆ ☆ ☆',
    2: '★ ★ ☆ ☆ ☆',
    3: '★ ★ ★ ☆ ☆',
    4: '★ ★ ★ ★ ☆',
    5: '★ ★ ★ ★ ★',
  };
  return (
    <div className="Rating">{rating[Math.round(Number(props.children))]}</div>
  );
}
