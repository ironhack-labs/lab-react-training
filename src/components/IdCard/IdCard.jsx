import './IdCard.css'

const IdCard = ({ cardInfo }) => {

    const { lastName, firstName, gender, height, birth, picture } = cardInfo

    const fullName = `${firstName} ${lastName}`

    return (
        <article className="IdCard">
            <div >
                <img src={picture} alt={fullName} />
            </div>
            <div>
                <p><b>First name: </b>{firstName}</p>
                <p><b>Last name: </b>{lastName}</p>
                <p><b>Gender: </b>{gender}</p>
                <p><b>Height: </b>{height}</p>
                <p><b>Birth: </b>{birth}</p>
            </div>
        </article>
    )
}

export default IdCard