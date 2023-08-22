
const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
    return (
        <div className="id-card">
            <img src={picture} />
            <div>
                <p>First Name:{firstName}</p>
                <p>Last Name:{lastName}</p>
                <p>Gender: {gender}</p>
                <p>Height: {height} cm</p>
                <p>Birth:{birth.toDateString()}</p>
            </div>
        </div>
    );
};

export default IdCard;
