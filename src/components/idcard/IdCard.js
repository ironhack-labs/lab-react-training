const IdCard = ({ lastName, firstName, gender, height, birth, picture}) => {
    
    let formattedBirth = birth.getDate()+"/"+(birth.getMonth()+1)+"/"+birth.getFullYear()
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-2">
                    <img className="img-fluid" src={picture}></img>
                </div>
                <div className="col-md-10">
                    <div className="card-body">
                        <h3 className="card-title">{firstName}</h3>
                        <h3 className="card-subtitle mb-2 text-muted">{lastName}</h3>
                        <p className="card-text">Gender: {gender}</p>
                        <p className="card-text">Height: {height}</p>
                        <p className="card-text">Birth: {formattedBirth}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

IdCard.defaultProps = {
    lastName: '',
    firstName: '',
    gender: '',
    height: '',
    birth: '',
    picture: Image
}

export default IdCard; 