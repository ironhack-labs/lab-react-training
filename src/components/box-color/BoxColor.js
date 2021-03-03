function BoxColor({ r, g, b, className }) {

    const style = {
        backgroundColor: `rgb(${r},${g},${b})`,
    }

    return (
        <div className={`card text-center mb-3 border-dark ${className}`} style={style}>  
            <div className="card-body" > 
            <div>rgb({r},{g},{b})</div>            
            </div>
        </div>
    )
}

BoxColor.defaultProps = {
    className: 'text-dark'
}

export default BoxColor