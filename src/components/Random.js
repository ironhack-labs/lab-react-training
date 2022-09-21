function Random(props){
    const {min, max} = props
    
    return(
        <p className="caja">Random value between {min} and {max} {" =>"} {  Math.round(Math.random() * (max - min) + min)}</p>
    )
      
}

export default Random