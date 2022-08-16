import berlin from '../../data/berlin.json';

function IdCard(props) {
  const { lastName, firstName, gender, height, birth, picture } = props;

  return (
    <div className="IdCard">
      <img src={picture} alt="picture" />
      <p>First Name: {firstName} </p>
      <p>Last Name: {lastName} </p>
      <p>Gender: {gender}</p>
      <p>Height: 2.00m</p>
      <p>Birth: Tue Nov 20 1985</p>
    </div>
  );
}

export default IdCard;
