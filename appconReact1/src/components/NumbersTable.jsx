

const NumbersTable = ({ limit }) => {

    const numberList = []

    for (let i = 1; i <= limit; i++) {

        numberList.push(
            <div
                key={i}
                style={{
                    display: 'inline-block',
                    margin: '5px',
                    padding: '10px',
                    backgroundColor: i % 2 === 0 ? 'red' : 'white',
                }}
            >
                {i}
            </div>
        )
    }

    return (

        <div>
            {numberList}
        </div>
    )
}

export default NumbersTable