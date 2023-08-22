import star from '../../assets/images/full-star.png'
import emptyStar from '../../assets/images/empty-star.png'

function Rating(props){
    const {children} = props;
    
    function verifyRating(){
        let fullStar = Math.round(children);
        let starsArray = [0, 0, 0, 0, 0];

        for(let i = 0; i < fullStar; i++){
            starsArray[i] = 1;
        }
        return starsArray;
    }
    let arr = verifyRating();
    return(
        <div>            
            {arr.map((num) =>{
               
                if(num === 1){
                    return <img src={star}></img>
                }else{
                   return <img src={emptyStar}></img>
                }
            })}
        </div>
    );
}

export default Rating;