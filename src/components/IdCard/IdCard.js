import './IdCard.css'

const IdCard = props => {
    const { lastName, firstName, gender, height, birth, picture } = props
    return (
        <article className="IdCard">
            <p>{lastName}</p>
            <p>{firstName}</p>
            <p>{gender}</p>
            <p>{height}</p>
            <p>{birth.toString()}</p>
           <img src={picture} alt=""/>
        </article>
    )
}

export default IdCard