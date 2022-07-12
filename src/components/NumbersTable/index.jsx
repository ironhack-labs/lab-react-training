import './NumbersTable.css'

const NumbersTable = ({ limit }) => {
    const boxes = []
    for (let i = 0; i < limit; i++) {
        if (i % 2 === 0) {
            boxes.push(<div key={i} className='box' style={{ backgroundColor: 'red' }}><p>{i}</p></div>)
        } else {
            boxes.push(<div key={i} className='box'><p>{i}</p></div>)

        }
    }
    return (
        <figure className='NumbersTable'>

            {boxes}
        </figure>
    )
}

export default NumbersTable