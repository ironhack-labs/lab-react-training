import './IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    const date = new Date(birth).toDateString() /* birth.toString().slice(0, 15) */

    return (

        <div className='Card'>
            <div className="CardImage">
                <img src={picture} className="picture" alt="picture" />
            </div>
            <div className="CardInfo">
                <p><strong>Last name: </strong>{lastName} </p>
                <p><strong>First name: </strong>{firstName}</p>
                <p><strong>Gender: </strong>{gender}</p>
                <p><strong>Height: </strong>{height}</p>
                <p><strong>Birth: </strong>{date} </p>
            </div>
        </div>
    )
}

export default IdCard