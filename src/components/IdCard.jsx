function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  const addDot = (num) => {
    return [num.toString().slice(0, 1), '.', num.toString().slice(1)].join('');
  };
  return (
    <div className="idCard">
      <img src={picture} alt="profile" />
      <div className="description">
        <p>
          <span className="bold">First name:</span> {firstName}
        </p>
        <p>
          <span className="bold">Last name:</span> {lastName}
        </p>
        <p>
          <span className="bold">Gender:</span> {gender}
        </p>
        <p>
          <span className="bold">Height:</span> {addDot(height)}m
        </p>
        <p>
          <span className="bold">Birth:</span> {birth.toDateString()}
        </p>
      </div>
    </div>
  );
}
export default IdCard;
