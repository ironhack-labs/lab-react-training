import './NumbersTable.css';

const NumbersTable = ( { limit }) => {
    const start = 1;
    const numbers = Array.from({ length: limit }, (_, i) => i + start);

    return (
        numbers.map((num) => {
         return (           
             <div
               className={ num % 2 === 0 ? 'Even-num' : 'Odd-num'}
               key={num}
             >
               {num}
             </div>
         );
        }) 
    )
};

export default NumbersTable;

