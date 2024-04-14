import "./NumberTable.css"


function NumbersTable({limit}){
   
    const numbers = Array.from({ length: limit }, (_, index) => index + 1)//el _ nos indica que el primer valor de esta funcion no se utiliza 
     
    console.log(numbers)
    

    return (
        
            <div className=" row row-cols-5 gap-2">
                {numbers.map((number) => {
                    let evenNumber = number%2 ===0 
                    
                    return(
                    <div key={number} className={ `box col ${evenNumber ? "evenNumber" : "oddNumber"}`} >
                        <span>{number}</span>
                    </div>)
                })}
                
            </div>
        

    )
}
export default NumbersTable