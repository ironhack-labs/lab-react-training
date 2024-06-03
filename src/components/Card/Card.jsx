const Card = ({ lastName, firstName, gender, height, birth, picture, country, isStudent, img, type}) => {
    const formattedBirthDate = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
      }).format(birth);
  return (
    <div className="card mb-3 col-md-10 m-auto">
      <div className="row g-0">
        <div className="col-md-2">
          <img src={picture ? picture : img} className="img-fluid rounded-start size" alt="..." />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">Last Name: {lastName}</h5>
            <h5 className="card-title">First Name: {firstName}</h5>
            {country ? <h5 className="card-title">Cuntry: {country}</h5> : ""}
            {type ? <h5 className="card-title">Type: {isStudent ? "Student" : "Teacher"}</h5> : ""}
            {gender ? <p className="card-text">
              Gender: {gender}
            </p>: ""}
            {height ? <p className="card-text">
              Height: {height}
            </p> : ""}
            {birth ? <p className="card-text">
              Date: {formattedBirthDate}
            </p> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
