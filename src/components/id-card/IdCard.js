
function IdCard({ lastName, firstName, gender, height, birth, picture}) {
    return (
        <div className="bg-light rounded-3 px-2 py-4 row w-50 align-items-center">
            <img className="col-lg-4 img-fluid w-25 rounded-circle" src={picture} alt={firstName}/>
            <div className="col-lg-8 d-flex flex-column align-items-start">
                <h4>First Name: {firstName}</h4>
                <h4>Last Name: {lastName}</h4>
                <h4>Gender: {gender}</h4>
                <h4>Height: {height}</h4>
                <h4>Birth: {birth.toDateString()}</h4>
            </div>
        </div>
    );
}

export default IdCard;