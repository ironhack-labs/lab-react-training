import './IdCard.css'

const IdCard = props => {

    const { image, details } = props

    return (
        <article className="IdCard">
            <p><b>Last Name:</b> {details.lastName}</p>
            <p><b>First Name:</b> {details.firstName}</p>
            <p><b>Gender:</b> {details.gender}</p>
            <p><b>Height:</b> {details.height}</p>
            <p><b>Birth:</b> {details.birth}</p>
            <img src={image} />
        </article>
    )
}

export default IdCard