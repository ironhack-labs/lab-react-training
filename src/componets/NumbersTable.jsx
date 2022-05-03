const NumbersTable = ({ limit }) => {
    let num = limit
    let data = [...Array(num + 1).keys()];
    const divStyle = {
        backgroundColor: 'red',
        color: 'white'
    }

    return (
        <div >
            {data.map(elm => { return <div style={divStyle}> <h1>{elm}</h1></div> })}
        </div>)



}

export default NumbersTable