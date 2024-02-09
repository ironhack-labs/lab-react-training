/* eslint-disable react/prop-types */
const IdCardItem = ({ lastName, firstName, gender, height, birth, picture }) => {
    return (
        <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={picture} alt="" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <p className="card-text"><strong>Last Name:</strong>{lastName}</p>
                        <p className="card-text"><strong>First Name:</strong>{firstName}</p>
                        <p className="card-text"><strong>Gender:</strong>{gender}</p>
                        <p className="card-text"><strong>Height:</strong>{height}</p>
                        <p className="card-text"><strong>Birth:</strong>{birth.toLocaleDateString()}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default IdCardItem;