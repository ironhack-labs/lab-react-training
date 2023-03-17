function NumbersTable({limit}){
    let arrNumber = []
    for(let i = 1; i <= limit; i++){
        console.log(limit)
        arrNumber[i] = i;
    }
    console.log(arrNumber)
    return (
        <div>
            <table>
                <tbody>
                
                </tbody>
                <thead>
                    <tr>
                    {arrNumber.map((number) => {
                        let tdNumber = ''
                        if(number % 2 === 0){
                            tdNumber = <td className='numbers-table' key={number} style={{background:'red'}}>{number}</td>
                        }
                        else{
                            tdNumber = <td className='numbers-table' key={number}  >{number}</td>
                        }
                        return tdNumber
                    })}
                    </tr>
                </thead>
            </table>
        </div>
    )
}
export default NumbersTable