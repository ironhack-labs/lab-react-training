
const BoxColor = props => {
    let {r, g, b} = props
    let rhex = r.toString(16).length === 1 ? r.toString(16) + "0" : r.toString(16)
    let bhex = b.toString(16).length === 1 ? b.toString(16) + "0" : b.toString(16)
    let ghex = g.toString(16).length === 1 ? g.toString(16) + "0" : g.toString(16)

    return (
        <div className="blackBox" style={{backgroundColor: `rgb(${r},${g},${b})`}}>
            <p>rgb({r}, {g}, {b})</p>
            <p>#{rhex + ghex + bhex}</p>
        </div>
    )
}

export default BoxColor