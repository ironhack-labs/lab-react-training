function BoxColor({ r, g, b, className }) {

    const style = {
        backgroundColor: `rgb(${r},${g},${b})`,
    }

    return (

        <div className={`card text-center border ${className}`} >
            <div className="card-body" >
                <div style={style}> rgb({r},{g},{b})</div>
            </div>
        </div>
    )
}

BoxColor.defaultProps = {
    className: 'text-dark'
}

export default BoxColor