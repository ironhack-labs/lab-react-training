import './IdCards.css'


function IdCard(props) {

    const { lastName, firstName, gender, height, birth, picture } = props

    return (
        <div className="IdCard">
            <h3 className="lastName">Lastname:{lastName}</h3>
            <h3 className="firstName">Firstname:{firstName}</h3>
            <h3 className="gender">Gender:{gender}</h3>
            <h3 className="height">Height:{height}</h3>
            <h3 className="birth">{birth.toDateString()}</h3>
            <div className="image">
                <img src={picture} className="picture"></img>
            </div>

        </div>


    )
}

export default IdCard

