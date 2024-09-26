function IdCard({ firstName, lastName, gender, picture, height, birth }) {
    const fullDate = birth.toDateString();
    return (
      <div>
        <img src={picture} alt={'profile picture of ' + firstName} />
        <p>First name: {firstName}</p>
        <p>Last name: {lastName}</p>
        <p>Gender:{gender}</p>
        <p>Birth: {fullDate}</p>
        <p>Height: {height / 100 + 'm'}</p>
      </div>
    );
  }
  
  export default IdCard;