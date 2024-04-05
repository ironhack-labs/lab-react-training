
import './IdCard.css';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
    return (
        <>
        <div className="idCard">
            <img src={picture} alt={`${firstName} ${lastName}`} />
            
                <p>Last Name:{lastName}</p>
                <p>First Name: {firstName}</p>
                <p>Gender: {gender}</p>
                <p>Height: {height}</p>
                <p>Birth: {birth.toLocaleDateString()}</p>
        </div>

        <div className="idCard">

            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt={`${firstName} ${lastName}`} />
            
                <p>Last Name: Delores </p>
                <p>First Name: Obrien</p>
                <p>Gender: female</p>
                <p>Height: 172</p>
                <p>Birth: 1988-05-11</p>
        </div>
        </>

    );
}

export default IdCard;
