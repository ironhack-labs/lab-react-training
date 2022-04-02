const IdCard = (props) => {
    const { lastName, firstName, gender, height, birth, picture } = props

  return (
    <div className='idCard'>
      <div>
        <img src={picture} alt={lastName} />
      </div>
      <div className='userInfo'>
        <p>  First name: {firstName}</p>
        <p> Last name: {lastName}</p>
        <p> Gender: {gender}</p>
        <p> Height: {height}</p>
        <p> Birth: {birth.toDateString()}</p>
      </div>
    </div>
  );
};

export default IdCards;