function Rating({ children }) {

  //Para Cristian: ¿Esto se haría así? No sé si hay una forma mejor de hacerlo
  let rating = children;

  switch (true) {
    case rating >= 0 && rating < 0.5:
      rating = "☆☆☆☆☆";
      break;
    case rating >= 0.5 && rating < 1.5:
      rating = "★☆☆☆☆";
      break;
    case rating >= 1.5 && rating < 2.5:
      rating = "★★☆☆☆";
      break;
    case rating >= 2.5 && rating < 3.5:
      rating = "★★★☆☆";
      break;
    case rating >= 3.5 && rating < 4.5:
      rating = "★★★★☆";
      break;
    case rating >= 4.5 && rating <= 5:
    rating = "★★★★★";
  };

  return (
    <p>{rating}</p>
  );
};

export default Rating;



