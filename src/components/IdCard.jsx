const IdCard = ({lastName, firstName, gender, height, picture, birth} ) => {
    return (
       
            <div className="card">
                <img src={picture} alt=""/>
                <div>
                    <p>First name: {firstName}</p>
                    <p>Last name: {lastName}</p>
                    <p>Gender: {gender}</p>
                    <p>Height: {height}</p>
                    <p>Birth: {birth.toString()}</p>
                    <p></p>
                </div>
            </div>
        
    )
}

export default IdCard;