const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="container">
      <p>{lastName}</p>
      <p>{firstName}</p>
      <p>{gender}</p>
      <p>{height}</p>
      <p>{birth}</p>
      <p>{picture}</p>
    </div>
  );
};

export default IdCard;
