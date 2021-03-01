function IdCard({ lastName, firstName, gender, height, birth, picture}) {
  return (
    <div className={`d-flex justify-content-center p-3 rounded-3`}>
      <div class="col-md-4">
        <img src={picture} alt={firstName} />
      </div>
      <div class="col-md-8">
        <ul className="list-group list-group-flush">
          <li><strong>First name:</strong> {firstName}</li>
          <li><strong>Last name:</strong> {lastName}</li>
          <li><strong>Gender:</strong> {gender}</li>
          <li><strong>Height:</strong> {height}m</li>
          <li><strong>Birth:</strong> {birth.toDateString()}</li>
        </ul>
      </div>
    </div>
  );
}
export default IdCard;

