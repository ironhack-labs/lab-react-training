export default function Rating({ children }) {
  const rating = Math.round(children);

  return (
    <div className="Rating">
      {rating === 0 && <p>☆☆☆☆☆</p>}
      {rating === 1 && <p>★☆☆☆☆</p>}
      {rating === 2 && <p>★★☆☆☆</p>}
      {rating === 3 && <p>★★★☆☆</p>}
      {rating === 4 && <p>★★★★☆</p>}
      {rating === 5 && <p>★★★★★</p>}
    </div>
  );
}
