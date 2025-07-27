

function NumbersTable({limit}) {
    const NumbersArray=[];
    for (let i=0; i<limit; i++) {
        NumbersArray.push(i);
    }

    return <div>
        {NumbersArray.map((number) => {
            return(
            <div
                style={{border:"2px solid black", padding: "10px", height: "50px", width: "50px", backgroundColor: number % 2 === 0  ? "white" : "red"}} 
                >
                    {number}
            </div>)
        })}
        
        
    </div>
}

export default NumbersTable;