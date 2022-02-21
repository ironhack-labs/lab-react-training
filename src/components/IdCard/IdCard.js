import "./IdCard.css"

function IdCard ({lastName, firstName, gender, height, birth, picture}) {
    return (
        <article className="idCard">
            <img src={picture} alt={firstName}/>
            <div className = "idCardDiv">
                <p><strong>First Name:</strong> {firstName}</p>
                <p><strong>Last Name:</strong> {lastName}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Height:</strong> {height}</p>
                <p><strong>Birth:</strong> {birth.toLocaleString()}</p>
            </div>
        </article>
    )
}

export default IdCard