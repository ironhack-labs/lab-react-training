import './IdCard.css'
const IdCard = props => {
    const { firstName, lastName, gender, height, birth, picture } = props

    return (
            <div className="row">
        <div className='IdCard'>
                <div className="col">
                    <img src={picture}></img>
                </div>
                <div className="col">
                    <p className="firstName"> <strong> {firstName} {lastName }</strong></p>
                    <p className="gender"> Gender: {gender}</p>
                    <p className="height"> Height: {height}</p>
                    <p className="birth"> Birthday: {birth.toDateString()} </p>
                </div>
            </div>
            </div>
    )
}

export default IdCard