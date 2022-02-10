function IdCard( { className, lastName, firstName, gender, height, birth, picture } ) {

   
    return (
        <div className={`border border-2 border-dark p-2 d-flex ${className}`}>
            <div className='img-card'><img src={picture} alt="picrture"></img></div>
            <ul className='list-unstyled'>
        <li><strong>First Name:</strong>{firstName}</li>
        <li><strong>First Name:</strong>{lastName}</li>
        <li><strong>Gender:</strong>{gender}</li>
        <li><strong>Height:</strong>{height}</li>
        <li><strong>Date of Birthay:</strong>{birth.toString()}</li>
        <li></li>
            </ul>  
        </div>
    )
}


export default IdCard