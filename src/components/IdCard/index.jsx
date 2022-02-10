import './IdCard.css'

const IdCard = (props) => {
  const { lastName, firstName, gender, height, birth, picture } = props

  return (
    <div className='idCard'>
      <div>
        <img src={picture} alt={lastName} />
      </div>
      <div className='userInfo'>
        <p><strong>First name:</strong> {firstName}</p>
        <p><strong>Last name:</strong> {lastName}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Height: </strong>{height}</p>
        <p><strong>Birth:</strong> {birth.toDateString()}</p>
      </div>
    </div>
  );
};

export default IdCard;