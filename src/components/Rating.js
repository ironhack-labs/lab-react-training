export default function Rating({ children }) {
  const ratingCount = (score) => {
    const stars = '★★★★★';
    return stars.slice(0, Math.round(score)).padEnd(stars.length, '☆');
  };

  return (
    <div>
      {children >= 0 && children <= 5 ? (
        <span>{ratingCount(children)}</span>
      ) : (
        <span>Wrong Rating</span>
      )}
    </div>
  );
}
