export const IdCard = ({
  lastName,
  firstName,
  gender,
  birth,
  height,
  picture,
}) => {
  return (
    <div style={{ border: '3px solid black', width: '20%' }}>
      <img src={picture} alt="person" />

      <p>{lastName}</p>
      <p>{firstName}</p>
      <p>{gender}</p>
      <p>born in: {birth}</p>
      <p>height: {height}</p>
    </div>
  );
};
