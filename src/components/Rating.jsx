function Rating({ children, color }) {
  return (
    <div style={{ color: color }}>
      {children < 1.5 ? '☆☆☆☆☆' : null}
      {children >= 1.5 && children < 2.5 ? '★☆☆☆☆' : null}
      {children >= 2.5 && children < 3.5 ? '★★☆☆☆' : null}
      {children >= 3.5 && children < 4.5 ? '★★★☆☆' : null}
      {children >= 4.5 && children < 5.5 ? '★★★★☆' : null}
    </div>
  );
}

export default Rating;
