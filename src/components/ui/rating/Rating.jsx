import "./Rating.css";

function Rating({ children }) {
  return (
    <div className="stars">
      {"★".repeat(Math.round(children))}
      {"☆".repeat(5 - Math.round(children))}
    </div>
  );
}

export default Rating;
