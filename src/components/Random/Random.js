import './Random.css'
export const Random = ({min,max})=>{
    return (
    
        <p className="random-p">Random value between {min} and {max} => {Math.round(Math.random()*max)+min}</p>
    
    )
}