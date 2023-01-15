import './NumbersTable.css'

function NumbersTable(props){
    const {limit} = props
    const numbersArray = []
    
        for (let i=1;i<limit;i++){
           numbersArray.push(i)
        }
        console.log(numbersArray)
    
    return(
        <div className='flexy'>
        {numbersArray.map(number=>{
           return <div> 
           {number%2===0 && <div className="number-box red">{number}</div>}
        {number%2!==0 && <div className="number-box">{number} </div>} 
        </div>
        })}
        </div>
    )
}

export default NumbersTable