import './IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    birth = birth.toDateString()

    return (

        <article className='IdCard'>

            <img src={picture} alt={lastName} />

            <ul>
                <li><strong>First Name: </strong>{firstName}</li>
                <li><strong>Last Name: </strong>{lastName}</li>
                <li><strong>Gender: </strong>{gender}</li>
                <li><strong>Height: </strong>{height}</li>
                <li><strong>Birth: </strong>{birth}</li>
            </ul>

        </article>
    )
}

export default IdCard