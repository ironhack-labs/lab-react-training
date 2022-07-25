
function IdCard({ lastName, firstName, gender, height, birth, picture }){
    const stringBirth = birth.toString().slice(0, 15);

    return(
        
        <div className="id-card">
            <img src={picture} alt="" />
        <div className="data">
                <p> <b>First Name:</b>  {firstName}</p>
                <p> <b>Last Name:</b>   {lastName}</p>
                <p> <b>Gender:</b>  {gender}</p>
                <p> <b>Height:</b>  {height}</p>
                <p> <b>Birth:</b>   {stringBirth}</p>
            </div>
        </div>
    );
}
export default IdCard;
