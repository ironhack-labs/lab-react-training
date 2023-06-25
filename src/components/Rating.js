export default function Rating({ children }) {
  let star;
  switch (true) {
    case children < 0.9:
      star = '☆ ☆ ☆ ☆ ☆';
      break;
    case children < 1.5:
      star = '★ ☆ ☆ ☆ ☆';
      break;
    case children < 2.5:
      star = '★ ★ ☆ ☆ ☆';
      break;
    case children < 3.5:
      star = '★ ★ ★ ☆ ☆';
      break;
    case children < 4.5:
      star = '★ ★ ★ ★ ☆';
      break;

    default:
      star = '★ ★ ★ ★ ★';
  }

  return (
    <div className="box-with-text">
      <p>{star}</p>
    </div>
  );
}
