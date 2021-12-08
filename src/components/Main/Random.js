//random 
const Random = ({min, max}) => {
    let randomN = function getRandom (min, max){
     return   Math.abs(Math.floor(Math.random()*(max-min)) - max);
    }
    
    return (
        <div>
            Random value between {min} and {max} = {randomN(min, max)}
        </div>
    )
        
    
        
}
 



//export
export default Random;