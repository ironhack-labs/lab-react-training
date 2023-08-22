const BoxColor = ({ r, g, b }) => {

    const colorStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        display: 'inline-block'

    }

    return (

        <div style={colorStyle}><h1>RGB</h1></div>
    )
}

export default BoxColor