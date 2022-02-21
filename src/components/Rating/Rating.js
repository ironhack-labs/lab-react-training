import './Rating.css'

const Rating =({children}) =>{

let rating = Math.floor(Number(children))
let points = ""

if (rating === 0){
points = '☆☆☆☆☆'
}else if(rating === 1){
   points= '★☆☆☆☆'
}else if(rating ===2){
    points = '★★☆☆☆'
}else if (rating === 3){
    points = '★★★☆☆'
}else if(rating ===4){
    points = '★★★★☆'
}else if (rating ===5){
    points = '★★★★★'
}
    return(
        <div className="ratings">
            <p>{points}</p>
        </div>
    )
}


export default Rating  