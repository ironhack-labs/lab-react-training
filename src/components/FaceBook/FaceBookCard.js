import "./FaceBook.css"

const FaceBookCard = ({ firstName, lastName, country, isStudent, img }) => {

    return (
        <div className="card">
            <img src={img} alt={firstName} />
            <div className="cardProfileBody">
                <p>First name: <span className="dataProfile">{firstName}</span></p>
                <p>Last name: <span className="dataProfile">{lastName}</span></p>
                <p>Country: <span className="dataProfile">{country}</span></p>
                <p>Type: {
                    isStudent ?
                        <span className="dataProfile"> Student </span> :
                        <span className="dataProfile"> Teacher </span>
                }</p>
            </div>
        </div>
    )
}

export default FaceBookCard