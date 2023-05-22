import './IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    const strBirth = birth.toString().slice(0, 15)

    return (

        <div className="card">
            <div className="cardImage"><img src={picture} alt="" />
            </div>
            <div className="cardContent"><ul>
                <li><h4>{lastName}</h4></li>
                <li><h4>{firstName}</h4></li>
                <li><h4>{gender}</h4></li>
                <li><h4>{height}</h4></li>
                <li><h4>{strBirth}</h4></li>
            </ul>
            </div>
        </div>


    )

}
export default IdCard