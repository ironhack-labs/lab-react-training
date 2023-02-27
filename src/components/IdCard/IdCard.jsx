import "./IdCard.css"

const IdCard = ({ personInfo }) => {

    const { lastName, firstName, gender, height, birth, picture } = personInfo
    const fullName = `${firstName} ${lastName}`

    return (
        <article className="IdCard">
            <div>
                <img src={picture} alt={fullName} />
            </div>
            <div>
                <ul className="IdList">
                    <li><b>First name:</b> {firstName}</li>
                    <li><b>Last name:</b> {lastName}</li>
                    <li><b>Gender:</b> {gender}</li>
                    <li><b>Height:</b> {height} cm</li>
                    <li><b>Birth:</b> {birth}</li>
                </ul>
            </div>
        </article>
    )
}

export default IdCard