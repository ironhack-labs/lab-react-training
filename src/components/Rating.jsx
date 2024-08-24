function Rating({ children }) {
  const roundedNumber = Math.round(children);

  const stars = Array(5)
    .fill()
    .map((_, index) => {
      return index < roundedNumber ? "★" : "☆";
    });

  return <div style={{ fontSize: "2rem" }}>{stars.join("")}</div>;
}

export default Rating;
