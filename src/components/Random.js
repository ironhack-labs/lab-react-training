function Random( props ){

   const result = Math.floor(Math.random() * (props.max - props.min + 1) + props.min)
    
   return ( 

        <div className="greeting"> 
        <p> Random value between {props.min} and {props.max} => {result}  </p>
        </div>
    )


}
export default Random
