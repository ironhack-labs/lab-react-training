

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
    return (
        <div className="idCard">
            <div className="avatar">
                <img src={picture} alt={`${firstName} ${firstName}`} />
            </div>
            <div className="info">
                <div className="dataCard">
                    <p>
                        <b>First Name:</b> {firstName}
                    </p>
                    <p>
                        <b>Last Name:</b> {lastName}
                    </p>
                    <p>
                        <b>Gender:</b> {gender}
                    </p>
                    <p>
                        <b>Height:</b> {height}
                    </p>
                    <p>
                        <b>Birth:</b> {birth.toString()}
                    </p>
                </div>
            </div>
        </div>
    )
}


export default IdCard