import './NumbersTable.css'

const NumbersTable = ({ limit }) => {



    const arrCuad = []
    let color = ''

    for (let i = 1; i < limit + 1; i++) {
        if (i % 2 === 0) { color = 'cuads red' } else { color = 'cuads white' }

        arrCuad.push({ index: i, color: color })
    }



    return (
        <div className='container'>
            {
                arrCuad.map((elm, id) => {

                    return <div className={elm.color} key={id} > {elm.index}</div>
                })
            }


        </div>
    )
}

export default NumbersTable