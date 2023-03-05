import './index.css'

function IdCard ({lastName, firstName, gender, height, birth, picture }) {
    return (
        <div className='IdCard'>
            
            <img src={picture}/>
            <ul>
                <li><b>First name:</b> {firstName}</li>
                <li><b>Last name:</b> {lastName}</li>
                <li><b>Gender:</b> {gender}</li>
                <li><b>Heigh:</b> {height}</li>
                <li><b>Birth:</b> {birth}</li>
            </ul>
        </div>
    );
};

export default IdCard;