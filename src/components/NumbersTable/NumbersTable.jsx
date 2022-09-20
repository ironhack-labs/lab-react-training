import './NumbersTable.css'



const NumbersTable = ({ limit }) => {
    let li = []
 
    for (let i = 1; i <= limit; i++) {
        li.push(i)
    }
    return (
        <div className='ulStyle' >

                {li.map(el => {
                    return (
                        /* el % 2 !== 0 ? <li className='styleLiWhite'>{el}</li>
                         : <li className='styleLiRed'>{el}</li> */
                    <li className='styleLiRed' key={el} style={{backgroundColor: el %2 ===0? 'red' : 'white'}}>
                    {el} 
                    </li> 
                    )
                })}
           
        </div>
    )
}
export default NumbersTable