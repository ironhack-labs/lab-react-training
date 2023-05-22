import './IdCard.css'

const IdCard = ({ userId }) => {

    const { lastName, firstName, gender, height, birth, picture } = userId

    return (

        <div class="divisor">
            <div>
                <img class='lista' src={picture} alt="Profile" />
            </div>
            <div class='lista'>
                <p><strong>Last Name:</strong> {lastName}</p>
                <p><strong>First Name:</strong> {firstName}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Height:</strong> {height} cm</p>
                <p><strong>Birth:</strong> {birth.toDateString()}</p>
            </div>
        </div>


    );
};

export default IdCard;