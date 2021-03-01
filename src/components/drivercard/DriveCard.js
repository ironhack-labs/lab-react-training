const DriveCard = ({ name, rating, car, model, licensePlate, picture }) => {
    
    return (
        <div className="card mb-3 bg-primary">
            <div className="row g-0 align-items-center">
                <div className="col-md-5">
                    <img className="driver float-end" src={picture}></img>
                </div>
                <div className="col-md-5">
                    <div className="card-body">
                        <h3 className="card-title">{name}</h3>
                        <h3 className="card-subtitle mb-2 text-muted">{rating}</h3>
                        <p className="card-text">{car}</p>
                        <p className="card-text">{model}</p>
                        <p className="card-text">{licensePlate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

DriveCard.defaultProps = {
    name: '',
    rating: '',
    car: '',
    model:'',
    licensePlate: '',
    picture: Image
}

export default DriveCard; 