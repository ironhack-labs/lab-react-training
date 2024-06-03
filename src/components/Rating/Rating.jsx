import "./Rating.css"
const Rating = ({ children }) => {
    const stars = Math.round(children);
  return (
    <div className="mb-3 rating">
      {'★'.repeat(stars) + '☆'.repeat(5 - stars)}
    </div>
  );
};

export default Rating;