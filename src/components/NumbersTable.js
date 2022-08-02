function NumbersTable({limit}) {
    
    let boxes =[];

    // const evenBoxStyle = {
    //     // backgroundColor: 'red',
    //     // height: 100,
    //     // width: 100,
    //     // borderColor: "black",
    //     // borderWidth: 2,
    //     // backgroundColor: 'red'
    // }

    // const boxStyle ={
    //     // height: 100,
    //     // width: 100,
    //     // borderColor: "black",
    //     // borderWidth: 2,
    // }

    for(let i=1; i<=limit; i++) {
        if(i%2===0)
        boxes.push(
            <div key={i} style={{backgroundColor: 'red', width:100, height:100}}>{i}</div>
        )
        else
        boxes.push(
            <div style={{width:100, height:100}} key={i}>{i}</div>
        )
    }

    return (
        <div>
            <h3>Iteration 12</h3>
                <div className="boxesStyle">
                    {boxes}
                </div>
        </div>
    )
}
export default NumbersTable