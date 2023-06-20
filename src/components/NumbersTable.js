export default function NumbersTable({limit}) {

    const numbers = [];
    for (let i = 0; i < limit; i++) {
        numbers.push(i+1);
    }

    return (
    <div className="number-table">
        {numbers.map(n => n % 2 === 0 
            ? <div className="even" key={n}>{n}</div>
            : <div className="odd" key={n}>{n}</div>) }
    </div>);
}