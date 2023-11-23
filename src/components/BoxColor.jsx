const BoxColor = ({ r, g, b }) => {

    let style = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,

    }
    return <div style={style}>
        <p>
            color: {r}, {g}, {b}
        </p>
    </div>


}



export default BoxColor