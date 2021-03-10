import App from '../../App';

function IdCard({lastName, firstName, gender, height, birth, picture}) {
  return (
    <div className="bg-light rounded-3 px-2 py-4 row w-50 align-items-center">
      <img className="col-lg-4 img-fluid w-25 rounded-circle"
        src={picture}
        alt={firstName}
      />
      <div className="col-lg-8 d-flex flex-column align-items-start">
        <h3>First Name: {firstName}</h3>
        <h3>Last Name: {lastName}</h3>
        <h3>Gender: {gender}</h3>
        <h3>Height: {height}</h3>
        <h3>Birth: {birth.toDateString()}</h3>
      </div>
    </div>
  );
}

export default IdCard;
