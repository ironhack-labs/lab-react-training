
//idCard
const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
    return (
      <div className="IdCard box">
        <img src={picture} alt={firstName} />
        <div className="right">
          <strong>Fist name:{firstName}</strong>
          <br />
          <strong>Last name:{lastName}</strong>
          <br />
          <strong>Gender:{gender}</strong>
          <br />
          <strong>Height:{height}</strong>
          <br />
          <strong>Birth:{birth}</strong>
        </div>
      </div>
    );
  };
  
  export default IdCard;