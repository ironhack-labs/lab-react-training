
import './NumbersTable.css'

const NumbersTable = ({ limit }) => {

    const box = []
    for (let i = 1; i < limit - 1; i++) {
        const bgColor = i % 2 === 0 ? 'red' : 'white'
        box.push(
            <div key={i} className='box' style={{ backgroundColor: `${bgColor}` }}>
                {[i]}
            </div>
        )
    }
    return (

        <div className="box-block">

            {box}

        </div>

    )
}
export default NumbersTable