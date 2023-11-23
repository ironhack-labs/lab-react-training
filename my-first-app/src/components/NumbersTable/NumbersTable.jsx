
import './NumbersTable.css'


function NumbersTable({ limit }) {

    const table = []

    for (let i = 1; i <= limit.length; i++) {
        table.push(i)
    }

    return (
        <div className="table">
            {
                table.map(e => {
                    return <span key={e} className="{elm % 2 === 0 ? 'odd' : ''}">{elm}</span>
                })
            }
        </div>
    )
}

export default NumbersTable


// const NumbersTable = ({ limit }) => {
//     const arr = []
//     for (let i = 1; i <= limit; i++) {
//         arr.push(i)
//     }

//     return (
//         <div className='grid'>
//             {
//                 arr.map(elm => {

//                     return < span key={elm} className={elm % 2 === 0 ? 'odd' : ''}> {elm}</span>

//                 })
//             }
//         </div >