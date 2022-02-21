const BoxColor = ({ r, g, b }) => {

    const divStyle = {
        height: 50,
        width: 200,
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    }

    return (
        <article className="BoxColor">
            <div style={divStyle}> </div>
        </article>
    )

}

export default BoxColor