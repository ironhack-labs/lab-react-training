export default function Rating(props) {
  const value = Math.round(Number(props.children));
  return (
    <div className="Rating">
      {value === 0 && <p>☆ ☆ ☆ ☆ ☆</p>}
      {value === 1 && <p>★ ☆ ☆ ☆ ☆</p>}
      {value === 2 && <p>★ ★ ☆ ☆ ☆</p>}
      {value === 3 && <p>★ ★ ★ ☆ ☆</p>}
      {value === 4 && <p>★ ★ ★ ★ ☆</p>}
      {value === 5 && <p>★ ★ ★ ★ ★</p>}
    </div>
  );
}
