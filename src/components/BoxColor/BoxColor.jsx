const BoxColor = props => {
    const {r, g, b} = props
    const divStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        padding: '30px',
        marginBottom: '10px',
        border: '1px solid black'
    }

    return (
       <div className='BoxColor' style={divStyle}>
            <span>{ r } - { g } - { b }</span>
        </div>
    )
}

export default BoxColor