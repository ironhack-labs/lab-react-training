 
 function Random ({min, max}){

    return <div>
        <p>Random value between {min} a {max} = {Math.floor(Math.random() * (max - min) + min)}</p>
    </div>
 }

 export default Random