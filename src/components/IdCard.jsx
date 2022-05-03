import './IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture}) => {
    return (
        <div className="idcard">
            <img src={picture} alt={firstName}/>
            <div>
            <p><strong>First name:</strong> {firstName}</p>
            <p><strong>Last name:</strong> {lastName}</p>
            <p><strong>Gender:</strong> {gender}</p>
            <p><strong>Height:</strong> {height}m</p>
            <p><strong>Birth:</strong> {birth.toString()}</p>
            </div>
        </div>
    )
} 
        

export default IdCard