const IdCard = props => {

const {lastName, firstName, gender, height, birth, picture} = props

    return (<>

<img src={picture}></img>
 <p>First name: {firstName} </p> 
 <p>Last Name: {lastName} </p> 
 <p>Gender: {gender} </p> 
 <p>Height: {height} </p> 
 <p>Birth: {birth.getDay()}/{birth.getMonth()}/{birth.getYear()}</p> 
   
 




    </>)
}


export default IdCard;