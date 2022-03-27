import './IdCard.css';

const IdCard = (props) => {
    const { 
        picture,
        firstName,
        lastName,
        gender,
        height,
        birth
    } = props;

    return (
        <div className="card" >
            <img src={picture} alt="portrait" />
            <ul className="details" >
                <li className="detail"><span>First name:</span> {firstName}</li>
                <li className="detail"><span>Last name:</span> {lastName}</li>
                <li className="detail"><span>Gender:</span> {gender}</li>
                <li className="detail"><span>Height:</span> {height/100}m</li>
                <li className="detail"><span>Birth:</span> {birth.toDateString()}</li>
            </ul>
        </div>
    );
};

export default IdCard;