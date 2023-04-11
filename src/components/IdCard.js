function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="box-id">
      <div className="">
        <img src={picture} alt="userImg" />
      </div>
      <div className="box-content">
        <span>First Name: {firstName}</span>
        <span>Last Name: {lastName}</span>
        <span>Gender: {gender}</span>
        <span>Height: {height}</span>
        <span>Birth: {birth.toUTCString()}</span>
      </div>
    </div>
  );
}

export default IdCard;
