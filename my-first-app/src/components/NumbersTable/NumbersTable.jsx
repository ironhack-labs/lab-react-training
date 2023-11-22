import './NumbersTable.css'

const NumbersTable = ({limit}) => {

    let arrayNumbers = []
    for (let i = 1; i < limit + 1; i++){
    arrayNumbers.push(i)
    }
    // console.log(arrayNumbers)
    return(
        <div>{
        arrayNumbers.map( (eachNumbers,i) => {
            if( eachNumbers % 2 === 0){
                return <div key={i} className='tableRed'>{eachNumbers}</div>
            }else{
                return <div key={i} className='tableBlack'>{eachNumbers}</div>
            }
            // return (
            //     eachNumbers % 2 == 0 ?                                          //no me convencen los ternarios...
            //     <div key={i} className='tableRed'>{eachNumbers}</div> : 
            //     <div className='tableBlack'>{eachNumbers}</div>
            // )
        })
        }
            
        </div>
    )
    
}

export default NumbersTable