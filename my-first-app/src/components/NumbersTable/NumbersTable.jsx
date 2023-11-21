import './NumberTable.css'
const NumbersTable = ({ limit }) => {


    let counter = [];
    for (let i = 1; i <= limit; i++) {
        counter.push(i);
    }

    return (
        <div>
            {counter.map((elm) => (
                <div>
                    <h1 className={elm % 2 ? 'odd' : ''}>{elm}</h1>
                </div>
            ))}
        </div>
    )


}
export default NumbersTable