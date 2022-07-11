import './IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
    return (
        <article className='card'>
            <img src={picture} alt="profile image" />

            <div className="info">
                <p><span>First name: </span>{firstName}</p>
                <p><span>Last name: </span>{lastName}</p>
                <p><span>Gender: </span>{gender}</p>
                <p><span>Height: </span>{height}</p>
                <p><span>Birth: </span>{birth.toDateString()}</p>
            </div>
        </article>
    )
}

export default IdCard