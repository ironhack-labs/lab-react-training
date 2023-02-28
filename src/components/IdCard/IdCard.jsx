import './../IdCard/IdCard.css'

function IdCard({ cardInfo }) {

    const { lastName, firstName, gender, height, birth, picture } = cardInfo

    return (
        <article className="IdCard">
            <div>
                <img src={picture} alt="" />
            </div>
            <div>
                <ul>
                    <li>First Name: {firstName}</li>
                    <li>Last Name: {lastName}</li>
                    <li>Gender: {gender}</li>
                    <li>Height: {height}</li>
                    <li>Birth: {birth}</li>
                </ul>
            </div>
        </article>
    )
}

export default IdCard