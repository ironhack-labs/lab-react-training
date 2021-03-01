

function IdCard({ firstName, lastName, gender, height, birthDate, image}){
    
    const date = birthDate.toString().split(' ').splice(0, 4).join(' ');
    
    const heightCm = height/100 + 'm';

    return(
        <div className="d-flex flex-row m-1 border border-dark p-1">
            <div>
                <img src={image} alt="id card " className=""/>
            </div>
            <div className="d-flex flex-column align-items-start ms-2">
                <span><strong>Last Name:</strong> {lastName}</span>
                <span><strong>First Name:</strong> {firstName}</span>
                <span><strong>Gender:</strong> {gender}</span>
                <span><strong>Height:</strong> {heightCm}</span>
                <span><strong>Birth:</strong> {date}</span>
            </div>
        </div>
    );
}

export default IdCard