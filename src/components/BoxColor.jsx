const BoxColor = ({r, g, b}) => {
    const colorStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        width: '200px',
        height: '100px',
        border: '1px solid black',
        margin: '10px',
        textAlign: 'center',
        lineHeight: '100px'
    }
    return(
        <div style = {colorStyle}>
            RGB({r}, {g}, {b})
        </div>
    )
}

export default BoxColor
  