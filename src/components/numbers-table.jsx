function NumberTile({children}) {
    const divStyle = { width: "50px", height: "50px"};
    children % 2 === 0 ? divStyle.backgroundColor = "red" : divStyle.backgroundColor = "white";
    children % 2 === 0 ? divStyle.color = "white" : divStyle.color = "black"
    return (
        <div className="border d-flex justify-content-center align-items-center" style={ divStyle }>{ children }</div>
    )

}

function NumbersTable({ limit }) {
    return (
        <div className="m-2">
            {/* <NumberTile children={} /> */}
        </div>
    )
}
export default NumbersTable;