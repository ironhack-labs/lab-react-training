
const IdCard = ({
    lastName,
    firstName,
    gender,
    height,
    birth,
    picture
}) => {
    return (
        <div className="d-flex flex-row">
            <div className="p-3">
                <img src={picture} alt="picture" />
            </div>
            <div className="p-3">
                <p><b>First name: </b> {firstName}</p>
                <p><b>Last name: </b>{lastName}</p>
                <p><b>Gender: </b> {gender}</p>
                <p><b>Height: </b> {height}</p>
                <p><b>Birth: </b> {birth.toDateString()}</p>
            </div>
        </div>
    )
}

export default IdCard