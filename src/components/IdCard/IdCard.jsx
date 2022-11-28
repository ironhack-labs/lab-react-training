import "./IdCard.css"

const IdCard = (props) => {
    const { lastName, firstName, gender, height, birth, picture } = props

    return (
        <div className="userCard">
            <img src={picture} alt="" />
            <div className="userInfo">
                <span><strong>Name: </strong>{firstName}</span>
                <span><strong>Last Name: </strong>{lastName}</span>
                <span><strong>Gender: </strong>{gender}</span>
                <span><strong>Height: </strong>{height}</span>
                <span><strong>Birth: </strong>{birth.toDateString()}</span>

            </div>
        </div>
    )
}

export default IdCard