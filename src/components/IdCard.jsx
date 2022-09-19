function IdCard({ lastName, firstName, gender, height, birth, picture }) {
    return (
        <>
            <div className="id-card">
                <div className="id-card__image">
                    <img src={picture} alt="profile" />
                </div>
                <div className="id-card__info">
                    <p>
                        <strong>First name:</strong> {firstName}
                    </p>
                    <p>
                        <strong>Last name:</strong> {lastName}
                    </p>
                    <p>
                        <strong>Genger:</strong> {gender}
                    </p>
                    <p>
                        <strong>Height:</strong> {height}
                    </p>
                    <p>
                        <strong>Birth:</strong> {birth.toDateString()}
                    </p>
                </div>
            </div>
        </>
    )
}

export default IdCard;