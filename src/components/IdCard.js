const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  const idStyle = {
    border: '2px solid black',
    margin: '3px',
  };
  return (
    <div style={idStyle}>
      <img src={picture} alt={'profile'} />
      <p>First name: {firstName}</p>
      <p>Gender: {gender}</p>
      <p>Last name: {lastName}</p>
      <p>Height: {height}</p>
      <p>Birthday: {birth.toDateString()}</p>
    </div>
  );
};
export default IdCard;
