export const Random = ({min,max}) =>{

    let randomNumber = Math.floor((Math.random() * max) + min);

return (

<div>

<p>  Randome value between {min} and {max} ={">"} {randomNumber}</p>



</div>

)


}