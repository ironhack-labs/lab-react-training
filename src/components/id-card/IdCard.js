const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
    return (
        <div className="idCard row mb-2">
            <div className="col-4" style={{backgroundImage: `url(${picture})`, backgroundSize: 'cover', backgroundPosition: 'center'}}/>
            <div className="col">
                <p>First name: {firstName}</p>
                <p>Last name: {lastName}</p>
                <p>Gender: {gender}</p>
                <p>Height: {height}</p>
                <p>Birth: {birth.toString()}</p>
            </div>
        </div>
    )
}

export default IdCard;