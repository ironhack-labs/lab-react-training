const BoxColor = ({ r, g, b}) => {

    const color = (`rgb(${r}, ${g}, ${b})`)

    return (
        <div className="ColorBox" style={{backgroundColor: color}}>
            <p>rgb({r}, {g}, {b})</p>
        </div>
    )
}

export default BoxColor