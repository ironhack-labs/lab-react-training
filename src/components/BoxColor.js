function BoxColor(props) {

    const { r, g, b } = props

    return (

        <div className="container card d-flex flex-direction-column justify-content-center" style={{ backgroundColor: `rgb(${r},${g},${b})`, width: 800, height: 100 }}>
            rgb({r},{g},{b}) <br />
            #{r.toString(16)}{g.toString(16)}{b.toString(16)}
        </div>

    )

}

export default BoxColor