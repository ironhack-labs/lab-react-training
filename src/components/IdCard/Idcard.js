function IdCard({ picture, firstName, lastName, gender, height, birth }) {
    return (
        <div>
           <img src={picture} alt='imagen'/>
            <h3>FirstName:</h3>{firstName}
            <h3>LastName:</h3>{lastName}
            <h3>gender:</h3>{gender}
            <h3>height:</h3>{height}
            <h3>birth:</h3>{birth.toString()}
           
        </div>
    )
}

export default IdCard