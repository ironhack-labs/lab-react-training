import "./IdCard.css"

const IdCard = ({ idInfo }) => {

    const { lastName, firstName, gender, height, birth, picture } = idInfo
    const birthDate = new Date(birth)

    return (
        <section className="image-container">
            <div>
                <img src={picture} alt={firstName} />
            </div>
            <div className="idInfo-container">
                <p><b>First Name:</b> {firstName}</p>
                <p><b>Last Name:</b> {lastName}</p>
                <p><b>Gender:</b> {gender}</p>
                <p><b>Height:</b> {height}</p>
                <p><b>Birth:</b> {birthDate.toDateString()}</p>
            </div>
        </section>
    )
}

export default IdCard