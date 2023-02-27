const boxColor = ({ r, g, b, children }) => {

    const redHex = r.toString(16).padStart(2, '0')
    const greenHex = g.toString(16).padStart(2, '0')
    const blueHex = b.toString(16).padStart(2, '0')

    const hexVal = `#${redHex}${greenHex}${blueHex}`

    children =
        < div >
            <p> rgb({r}, {g}, {b}) </p>
            <p>{hexVal}</p>
        </div >

    const bgcolor = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
    }

    return < div className="boxColor" style={bgcolor}>{children}</div >


}

export default boxColor