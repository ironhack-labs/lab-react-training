export const IdCard = ({
  lastName,
  firstName,
  gender,
  birth,
  height,
  picture,
}) => {
  return (
    <div>
      <img src={picture} alt="person" />

      <p>{lastName}</p>
      <p>{firstName}</p>
      <p>{gender}</p>
      <p>{birth}</p>
      <p>{height}</p>
    </div>
  );
};
