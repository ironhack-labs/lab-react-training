
function IdCard ({lastName, firstName, gender, height, birth, picture}) {
    return(
        <div className="IdCard">
            <div className="cardPicture">
                <img src={picture} alt='profile' />
            </div>
            <div className="cardInfo">
                <p>First name: {firstName}<br></br>
                Last name: {lastName}<br></br>
                Gender: {gender}<br></br>
                Heigth: {height}</p><br></br>
            </div>
        </div>
    );
};

export default IdCard;