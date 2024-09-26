function Random() {
    
let props = {min:1,max:100} 

   let randNumber = Math.floor((Math.random() *props.max) + props.min)
  

    return(
        <div className="randomNumber">
            <p>Random value between {props.min} and {props.max} = {randNumber}</p>
        </div>
    )
}
export default Random