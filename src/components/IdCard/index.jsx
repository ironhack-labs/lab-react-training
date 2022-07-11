import './idCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture, }) => {
    return (
        <article className="idCard" >
            <img src={picture} alt={`${firstName} face`} />
            <article>
                <p><b>First name:</b> {firstName}</p>
                <p><b>First name:</b> {lastName}</p>
                <p><b>Genger:</b> {gender}</p>
                <p><b>Height:</b> {height / 100} m</p>
                <p><b>birth:</b> {birth.toDateString()}</p>
            </article>
        </article >
    )
}

export default IdCard