import './IdCard.css'

const IdCard = (props) => {

    const { picture, lastName, firstName, gender, height, birth } = props

    return (
        <article className='IdCard'>
            <div>
            <p>{lastName}</p>
            <p>{firstName}</p>
            <p>{gender}</p>
            <p>{height}</p>
            <p>{birth.toDateString()}</p>
            </div>
            <img src={picture} alt={firstName} />

        </article>
    )
}

export default IdCard
