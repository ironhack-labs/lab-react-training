import "./IdCard.css"

const IdCard = props => {
    const { firstName, lastName, gender, height, birth, picture } = props
    return (
        <article className="card">
            <img src={picture} alt={firstName} />
            <div className="cardBody">
                <p className="bodyKeys">First Name: <span className="bodyIDContent">{firstName}</span></p>
                <p className="bodyKeys">Last Name: <span className="bodyIDContent">{lastName}</span></p>
                <p className="bodyKeys">Gender: <span className="bodyIDContent">{gender}</span></p>
                <p className="bodyKeys">Height: <span className="bodyIDContent">{height}</span></p>
                <p className="bodyKeys">Birth: <span className="bodyIDContent">{`${birth.toDateString()}`}</span></p>
            </div>
        </article>
    )
}
export default IdCard