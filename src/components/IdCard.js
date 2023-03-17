
function IdCard ({ lastName, firstName, gender, height, birth, picture }) {
    return(
        <div className="IdCard">
            <div className="cardPicture">
                <img src={picture} alt='profile' />
            </div>
            <div className="InfoCard">
                <p><b>First name: </b> {firstName} </p>
                <p><b>Last Name: </b> {lastName} </p>
                <p><b>Gender: </b> {gender} </p>
                <p><b>Height: </b> {height} </p>
                <p><b>Birth: </b> {birth} </p>
            </div>
        </div>
    );
};

export default IdCard;