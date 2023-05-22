import "./IdCard.css"


const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {


    const birthString = birth.toString().slice(0, 15)

    return (
        <div className="Card">

            <div className="CardImage">
                <img src={picture} alt="" />
            </div>

            <div className="CardText">
                <p><strong>First name:</strong> {firstName} </p>
                <p><strong>Last name:</strong> {lastName} </p>
                <p><strong>Gender:</strong> {gender} </p>
                <p><strong>Height:</strong> {height} </p>
                <p><strong>Birth:</strong> {birthString} </p>
            </div>

        </div>

    )

}


export default IdCard