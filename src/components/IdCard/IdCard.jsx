import './IdCard.css';
const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
    return (
        <div className='idcard-container'>
            <div>
                <img src={picture} alt={picture} />
            </div>
            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Gender: {gender}</p>
                <p>Height: {height}</p>
                <p>Birth: {birth}</p>
            </div>
        </div>
    );
}
export default IdCard;