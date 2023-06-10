function IdCard({ picture, firstName, lastName, height, birthday }) {
  return (
    <article>
      <div className="grid">
        <div>
          <img src={picture} alt={firstName + ' ' + lastName} />
        </div>
        <div>
          <p>
            <strong>First Name:</strong> {firstName}
            <br />
            <strong>Last Name: </strong> {lastName}
            <br />
            <strong>Height:</strong> {height}
            <br />
            <strong>Birthday:</strong> {birthday}
          </p>
        </div>
      </div>
    </article>
  );
}

export default IdCard;
