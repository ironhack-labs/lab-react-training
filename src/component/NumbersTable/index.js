import './styleNumbers.css'
const NumbersTable = ({limit}) => {
    const tableArr = Array.from(Array(limit)).map((item, index) => index +1)
    return(
        <div className="NumbersTable">
            {tableArr.map((item, index) =>{
                return(
                    <div className="table" key={item} 
                    style={{backgroundColor: item % 2 === 0 ? 'red' : 'white'}}
                    >{item}</div>
                )
            })}
        </div>
    )
};

export default NumbersTable;