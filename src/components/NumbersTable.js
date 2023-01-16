function NumbersTable(props) {
    
    const numbersList = []
    for (let i=0; i<= props.limit; i++){
        numbersList.push(i)

    }
    return (
        
        numbersList.map((number)=>{
            return(
                
                <td key={number} id='numbersTable' style={number % 2 === 0 ? { backgroundColor: 'red' } : {backgroundColor: 'white'}}>{number}</td>
               
            )
            
        })
     
    )
}

export default NumbersTable;