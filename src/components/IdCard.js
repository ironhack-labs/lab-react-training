const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
    return (
        <article className="row idcard">
            <div className="col-4">
                <img src={picture} alt={firstName} />
            </div>
            <div className="col-8">
                <p><strong>First name:</strong> {firstName}</p>
                <p><strong>Last name:</strong> {lastName}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Height:</strong> {height}</p>
                <p><strong>Birth:</strong> {birth.toUTCString().slice(0, 16)}</p>
            </div>
        </article>
    )
}

export default IdCard