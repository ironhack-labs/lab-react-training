import './NumbersTable.css'

function NumbersTable ({limit}) {
    
    let showNumbers = () => {
        let numbers = [];
        for (let i = 1; i <= limit; i++) {
            const evenNum = i % 2 === 0 ? 'num red' : 'num';
            numbers.push(<div key={i} className={evenNum}>{i}</div>);
        }
        return numbers;
    };
    
    return (
        <div className='numbers'>
            {showNumbers()}
        </div>
    )
}
export default NumbersTable;