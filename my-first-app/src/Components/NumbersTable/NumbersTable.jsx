import './NumbersTable.css'

const NumbersTable = ({ limit }) => {
    const Arr = []

    for (let i = 1; i < limit + 1; i++) {
        Arr.push(i)

    }

    return (
        <div className='num'>
            {Arr.map(e => {
                return (
                    <span className={e % 2 === 0 && 'Red'} >{e}</span>
                )
            })
            }
        </div>
    )
}

export default NumbersTable