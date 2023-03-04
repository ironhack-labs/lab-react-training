import './index.css'

function IdCard ({lastName, firstName, gender, height, birth, picture }) {
    return (
        <div className='IdCard'>
            <img src={picture}/>
            <p>First name: {firstName}</p>
            <p>Last name: {lastName}</p>
            <p>Gender: {gender}</p>
            <p>Heigh: {height}</p>
            <p>Birth: {birth}</p>
        </div>
    );
};

export default IdCard;