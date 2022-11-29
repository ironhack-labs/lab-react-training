import "./IdCard.css";

function IdCard (props){
    const {lastName, firstName, gender, height, birth, picture} = props;
    return (
        <div className="IdCard">
            <img src={picture} alt="profile photo" />
            <div class="container">
                <p><strong>First name:</strong> {firstName}</p>
                <p><strong>Last name:</strong> {lastName}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Height:</strong> {height}</p>
                <p><strong>Birth:</strong> {birth.toDateString()}</p>
            </div>
        </div>
    )
};

export default IdCard;