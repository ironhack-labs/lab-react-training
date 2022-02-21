
const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <article className="IdCard">
      <img src={picture} alt={lastName} />
      <p>  <strong> last name:  </strong>{lastName} </p>
      <p> <strong> first name: </strong> {firstName}</p>
      <p>  <strong> gender: </strong>{gender} </p>
      <p> <strong> height: </strong>{height} </p>
      <p> <strong> birth: </strong> {birth.toDateString()}  </p>

    </article>
  );
};

export default IdCard;
