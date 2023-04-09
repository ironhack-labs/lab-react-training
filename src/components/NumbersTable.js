
function NumbersTable(prop) {

    const { limit } = prop
    let numsLimit = Number(limit)
    
    let numsArray = []
    
    let divStyleWhite = {
        backgroundColor: 'white',
        height:100,
        width:185,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderStyle:'solid',
    }
    let divStyleRed = {
        backgroundColor: 'red',
        height:100,
        width:185,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderStyle:'solid',
    }

    for (let i = 1; i < numsLimit + 1; i++) {
        numsArray.push(i)
    }

    return (
        <div className="container card p-5" style={{width:1000}}>
            <div className="row">
                {numsArray.map((numb) => {
                    if (numb % 2 === 0) {
                        return (

                            <h2  key={numsArray.indexOf(numb)} style={divStyleRed}>{numb}</h2>
                        )
                    }
                    else {
                        return (
                            <h2  key={numsArray.indexOf(numb)} style={divStyleWhite}>{numb}</h2>
                        )
                    }
                })}
            </div>
        </div>
    )
}
export default NumbersTable