function IdCard(props){

    const {firstName, lastName, gender, height, birth, picture}=props;
    
    const formattedHeight = Number((height/100).toFixed(2));
    const birthToString = birth.toDateString();

    return(
        <div className="idCard">
            <div>
                <img src={picture}></img>
            </div>
            <div className="idCard-info">
                <p><b>First Name</b>: {firstName}</p>
                <p><b>Last Name</b>: {lastName}</p>
                <p><b>Gender</b>: {gender}</p>
                <p><b>Height</b>: {formattedHeight}m</p>
                <p><b>Birth</b>: {birthToString}</p>
            </div>
            
        </div>
    )
}

export default IdCard;