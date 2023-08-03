

const NumbersTable = ({limit}) => {

    const red = {
        backgroundColor: "red"
    }
    
    const numberStyling = {
    padding: "15px",
    border: "black solid 1px"
    }
    
    const container = {
        display: "flex"
    }

    const numbers = [];

    for(let i = 1; i <= limit; i++){
        numbers.push(i)
    }

    return <table style={container}>
        {numbers.map(number => 
        
        number % 2 ? <tr key={number} style={numberStyling}>{number}</tr> : <tr key={number} style={{...numberStyling, ...red}}>{number}</tr>)}
    </table>
}

export default NumbersTable;