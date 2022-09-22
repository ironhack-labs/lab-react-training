function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div>
      <div>
        <img src={picture} className="profileImage" alt="profileImage" />;
      </div>
      <div>
        <p>First name: {firstName}</p>
        <p>Last name: {lastName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Birth: {birth.toDateString()}</p>
      </div>
    </div>
  );
}

export default IdCard;
