


const BoxColor = props => {


    const { r, g, b } = props

    return (
        <div className="container" style={{ backgroundColor: `rgb(${r},${g}, ${b})` }} >
            <p className="text-center">rgb({r},{g},{b})</p>
        </div>
    )
}

export default BoxColor