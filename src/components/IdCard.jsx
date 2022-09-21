import IdCards from './IdCards.css'

function IdCard({lastName,firstName,gender,height,birth,picture})
{
return(
<div className="Id-Card">
<img src = {picture} alt = "profileimg" className={"profilepicturee"}/>
    <div className='info'> 
      <h3>{lastName}</h3>
     <h3>{firstName}</h3>
     <h3>{gender}</h3>
     <h3>{height}</h3>
     <h3>{birth}</h3>
    </div>
   
     
</div>

)

}

export default IdCard;