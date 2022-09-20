function IdCard(props) {
    const { picture, lastName, firstName, gender, height, birth } = props
    return (
        <div className="card-person">
            <div className="img-card">
                <img src={picture} />
            </div>
            <div className="data-card">
                <p><b>First name:</b> {firstName}</p>
                <p><b>Last name:</b> {lastName}</p>
                <p><b>Gender:</b> {gender}</p>
                <p><b>Height:</b> {height}</p>
                <p><b>Birth:</b> {birth}</p>
            </div>
        </div>
    )
}

export default IdCard;