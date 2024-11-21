import './IdCard.css'


const IdCard = (personData) => {
    const { lastName, firstName, gender, height, birth, picture } = personData
    const date = new Date(birth).toDateString()
    return (
        <div className="idCard">
            <div className="cardImg">
                <img src={picture}></img>
            </div>
            <div className="cardInfo">
                <ul>
                    <li><strong>First name: </strong>{firstName}</li>
                    <li><strong>Last name: </strong>{lastName}</li>
                    <li><strong>Gender: </strong>{gender}</li>
                    <li><strong>Height: </strong>{height}</li>
                    <li><strong>Birth: </strong>{date}</li>
                </ul>
            </div>
        </div>
    )
}

export default IdCard