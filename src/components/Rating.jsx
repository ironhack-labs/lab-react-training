import './Rating.css'

const Rating = ({ children }) => {

    const roundedValue = Math.round(children);
      const stars = Array.from({ length: 5 }, (_, index) => {
    return index < roundedValue ? '★' : '☆';
  });

  return (
    <div>
      {stars.join(' ')}
    </div>
  );
};

export default Rating;
