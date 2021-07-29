import {useState, useEffect} from 'react';

function NumbersTable() {
    const [limit, setLimit] = useState(0);

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setLimit(value);
    }

    const renderTable = (limit=0) => {
        let cells = [];

        for(let i=0; i<limit; i++) {
            cells.push(i+1);
        }

        return (
            <div className="numbersTable">
                {cells.map((item,index_cells) => (
                    <div className="number" style={{backgroundColor: index_cells % 2 === 0 ? 'red' : 'white'}}>
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div>
            <input type='number' name="valor" onChange={handleChange}/>
            {renderTable(limit)}
        </div>
    );
}

export default NumbersTable;