
function BoxColor ({r,g,b}) {

    const BoxColor = {
        backgroundColor: ["rgb(",r,",",g,",",b,")"].join("")
        
      };
    
    return(
       <div className= 'mt-2' style= {BoxColor}>{`rgb${r},${g},${b}`}</div>

    )

}

export default BoxColor
