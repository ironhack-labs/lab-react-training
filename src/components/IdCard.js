function IdCard( { lastName, firstName, gender, height, birth, picture } ){
   
    return(
       
        <div className="card">
        
            <div className="profile-image">
                <img src={picture} alt=""/>
            </div>
            <div className="profile-info">
                <p>firstName: <span>{firstName}</span></p>
                <p>LastName: <span>{lastName}</span></p>
                <p>Gender: <span>{gender}</span></p>
                <p>Height: <span>{height / 100 }m</span></p>
                <p>birth: <span>{birth.toDateString()}</span></p>
            </div>    
        </div>
    )
}

export default IdCard