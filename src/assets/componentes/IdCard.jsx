/* eslint-disable react/prop-types */
function IdCard ({ firstName,lastName,picture,birth,gender,height}) {
 
  return (
    <div className="id-card">
      <img src={picture} alt={`${firstName} ${lastName}`} />
      <div>
        <p><strong>First Name:</strong> {firstName}</p>
        <p><strong>Last Name:</strong> {lastName}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Height:</strong> {height} cm</p>
        <p><strong>Birth:</strong> {birth.toLocaleString()}</p>
      </div>
    </div>
  );
}
export default IdCard;
