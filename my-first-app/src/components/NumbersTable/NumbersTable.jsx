import './NumbersTable.css'



const NumbersTable = ({ limit }) => {

    const tableArray = [];

    for (let i = 0; i <= limit; i++) {
        tableArray.push(i);
    }


    return (

        tableArray.map((elm, index) => {
            if (elm % 2 === 0) {
                return <p key={index} style={{ backgroundColor: 'red' }}>{elm}</p>
            }
            else {
                return <p key={index} style={{ backgroundColor: 'white', color: "black" }}>{elm}</p>
            }
        }
        )
    )
}

export default NumbersTable
