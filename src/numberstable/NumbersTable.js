import './NumbersTable.css'
const NumbersTable = ({limit}) => {
let listOfNumbers = [];
for(let i=1; i <= limit; i+=1){
    listOfNumbers.push(i);
}
console.log(listOfNumbers);
return(
    <div>
    
    <table className="table">
        <tbody>
            <tr>
                {listOfNumbers.map((number, index) => (
                    number % 2 === 0 ? <td className="even-numb" key={index}>{number}</td>: <td key={index} className="numb">{number}</td>
                )
                   )}
            </tr>
        </tbody>
    </table>
    </div>
)

}
export default NumbersTable