const NumbersTable = ({ limit }) => {

    const myArray = Array.apply(null, Array(limit)).map((e, i) => i + 1)

    const colorRed = { backgroundColor: 'red' }

    const colorWhite = { backgroundColor: 'white' }

    return (
        <>
            {
                myArray.map(e => {
                    return <p style={e % 2 === 0 ? colorRed : colorWhite}>{e}</p>
                })
            }
        </>
    )


}

export default NumbersTable