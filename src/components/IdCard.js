export const IdCard = ({
  lastName,
  firstName,
  gender,
  height,
  birth,
  picture,
}) => {
  return (
    <div className="id-card">
      <div>
        <img src={picture} alt="Profile" />
      </div>
      <div>
        <p>
          <strong>First Name:</strong> {firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {lastName}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>Height:</strong> {height}
        </p>
        <p>
          <strong>Birth:</strong> {birth.toDateString()}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
