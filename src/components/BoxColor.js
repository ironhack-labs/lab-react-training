const BoxColor = (props) => {

    let {r, g, b} = props
    let properties = {backgroundColor: `rgb(${r}, ${g}, ${b})`, width: '500px', height: '100px'}

    return (
        <div className="box" style={properties}>
        
            <p className="colorLetters"> rgb ({r}, {g}, {b})</p>

        </div>
    )
}

export default BoxColor
