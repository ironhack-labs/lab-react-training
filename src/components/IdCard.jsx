const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="flex items-center border border-black rounded-lg p-4 m-4 ">
      <img src={picture} alt="first name & last name" />
      <div>
        <p>
          <strong>Name:</strong> {firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {lastName}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>Height:</strong> {height}cm
        </p>
        <p>
          <strong>Birth:</strong> {birth.toDateString()}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
