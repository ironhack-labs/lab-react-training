function IdCard({lastName, firstName, gender, height, birth, picture}){
    return <div>
        <img src={picture} alt="Id of person"/>
        <p>First name: {firstName}</p>
        <p>Last name: {lastName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height/100}m</p>
        <p>Birth: {birth.toLocaleDateString()}</p>

    </div>
}

export default IdCard;