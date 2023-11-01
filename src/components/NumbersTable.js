/** Create a NumbersTable component that displays a list of numbers between 1 and the limit. Even numbers must be colored in red.

The component should take 1 prop:

limit: A number. */

function NumbersTable(props) {
    const numbers = [];
    
    for (let i = 1; i <= props.limit; i++) {
        numbers.push(i);
    }
    
    return (
        <div className="numbers-table">
            {numbers.map((number) => {
                return <div className="number-box" style={{backgroundColor: number % 2 === 0 ? 'red' : 'white'}}>{number}</div>
            })}
        </div>
    );
}

export default NumbersTable;