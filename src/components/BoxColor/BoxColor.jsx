const BoxColor = ({ r, g, b }) => {
    const divStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    }

    return (
        <div className='GreetingsCard' style={divStyle} >
            <p> rgb({r}, {g}, {b})</p>
        </div>
    )
}

export default BoxColor