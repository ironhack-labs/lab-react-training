const NumbersTable = (props) => {

    const { limit } = props;

    const red = {
        backgroundColor: "red"
    }


    const numbers = [];

    for(let i = 1; i <= limit; i++){
        numbers.push(i)
    }

    return <table>
        {numbers.map(number => 
        
        number % 2 ? <tr key={number}>{number}</tr> : <tr key={number} style={red}>{number}</tr>)}
    </table>
}

export default NumbersTable;