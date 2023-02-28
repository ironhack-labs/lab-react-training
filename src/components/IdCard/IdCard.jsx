import './IdCard.css'

const IdCard = ({ cardInfo }) => {

    const { lastName, firstName, gender, height, birth, picture } = cardInfo
    const fullName = `${firstName} ${lastName}`
    const date = birth.toString()

    return (
        <article className="userInfo">

            <div className="avatar">
                <img className="image" src={picture} alt={fullName} />
            </div>
            <div>
                <p><b>First Name: </b>{firstName}</p>
                <p><b>Last Name: </b>{lastName}</p>
                <p><b>Gender: </b>{gender}</p>
                <p><b>Height: </b>{height} m</p>
                <p><b>Gender: </b>{gender}</p>
                <p><b>Birth: </b>{date}</p>
            </div>
        </article>
    )

}

export default IdCard