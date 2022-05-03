const IdCard = ({ lastName, firstName, gender, birth, picture }) => {
    
    return (


        <article>
            <hr />
            <h3> {firstName } {lastName}</h3>
            <p>{gender}</p>
            <p>{birth.toString()}</p>
            <img src={picture} alt={firstName} />
            
        
        </article>
    
        
    )
   
}

export default IdCard