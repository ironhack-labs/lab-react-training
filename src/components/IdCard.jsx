import './IdCard.css'
const IdCard = props => {
    const { lastName, firstName, gender, height, birth, picture } = props
    return (
        <article className="IdCard">
            <img src={picture} alt="" />
            <div>
                <h1 className="LastName">{lastName}</h1>
                <h2 className="firstName">{firstName}</h2>
                <p className="gender">{gender}</p>
                <p className="height">{height}</p>
                <p className="birth">{birth.toDateString()}</p>
            </div>

        </article>

    )
}
export default IdCard