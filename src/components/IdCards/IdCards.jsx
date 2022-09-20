import './IdCards.css'

const IdCard = (props) => {
    const { picture, firstName, lastName, gender, birth, height } = props
    const date = birth.toDateString()

    return (
        <div className="IdCard">
            <div className="IdCard-img">
                <img src={picture} alt="perfil-image" />
            </div>
            <div className='IdCard-text'>
                <p><b>First name: </b>{firstName}</p>
                <p><b>Last name: </b>{lastName}</p>
                <p><b>Gender: </b>{gender}</p>
                <p><b>Height: </b>{height}</p>
                <p><b>Birth: </b>{date}</p>
            </div>
        </div>
    )
}

export default IdCard