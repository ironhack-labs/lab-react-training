

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
    return (
        <div className="card max-card-width" style={{ width: 15 + 'rem' }} >
            <img src={picture} alt={picture} className="card-img-top" />
            <div className="card-body">
                <p><span className="fw-bold">First Name</span>: {firstName}</p>
                <p><span className="fw-bold">Last Name</span>: {lastName}</p>
                <p><span className="fw-bold">Gender</span>: {gender}</p>
                <p><span className="fw-bold">Height</span>: {height}</p>
                <p><span className="fw-bold">Birth</span>: {birth}</p>
            </div>
        </div>
    );
}

export default IdCard;