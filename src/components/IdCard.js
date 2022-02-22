const IdCard = props =>{
    const { firstName, lastName, gender, height, birth, picture}= props
   
    return(
        <>
          <h2>{lastName}</h2>
        <h3>{firstName}</h3>
          <hr/>
          <p>{gender}</p>
            <p>{height}</p>
            <p>birth:{birth.getDay()}/{birth.getMonth()}/{birth.getYear()}</p>
            <img src={picture} />         
          
        </>
        
        )
}

export default IdCard;