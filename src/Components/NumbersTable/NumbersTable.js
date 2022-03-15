import './NumbersTable.css';

function NumbersTable(props){

    let numbersArr = [];

    for(let i=1; i<= props.limit; i++){
        numbersArr.push(i);
    }

    return(
        <table>
            <tbody>
                <tr>
                    {numbersArr.map((num) => (
                        <td key={num} style={{ backgroundColor: num%2 === 0 ? 'red' : 'white' }}>{num}</td>
                    ))}
                </tr>       
            </tbody>
    
        </table>
    )
}   

export default NumbersTable; 