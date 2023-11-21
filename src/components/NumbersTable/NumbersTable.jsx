function NumbersTable({ limit }) {
    const numbers = []
    for (let i = 1; i <= limit; i++) {
        numbers.push(i)
    }
    const normalStyles = {
        backgroundColor: 'white'
    }
    const redStyles = {
        backgroundColor: 'red'
    }

    return (
        <div>
            { numbers.map((number, i) => <div key={ i } style={ number % 2 === 0 ? redStyles : normalStyles }>{ number }</div>) }
        </div>
    )
}

export default NumbersTable