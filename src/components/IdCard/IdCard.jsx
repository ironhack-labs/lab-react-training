
import './IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {


    const date = new Date(birth).toDateString()
    return (
        <div className="idCard">

            <div className="image">
                <img src={picture} alt="" />
            </div>

            <div className="text">
                <p><strong>Firt Name: </strong>{firstName}</p>
                <p><strong>Firt LastName: </strong>{lastName}</p>
                <p><strong>Firt Gender: </strong>{gender}</p>
                <p><strong>Firt Height: </strong>{height}</p>
                <p><strong>Firt Date: </strong>{date}</p>
            </div>

        </div>

    )



}

export default IdCard

