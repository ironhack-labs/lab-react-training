const NumbersTable = ({limit, className}) => {
    const arr = [];
    for (let i = 0; i < limit; i++) {
        arr.push(i);
    }
    console.log(arr)

    return (
        <div className={`row ${className}`}>
            {arr.map(n => {
                return <div className={`${n % 2 === 0 && 'bg-danger'} col-2 border border-dark p-3 d-flex justify-content-center align-items-center`}>{n}</div>
            })}
        </div>
    );
}

export default NumbersTable;