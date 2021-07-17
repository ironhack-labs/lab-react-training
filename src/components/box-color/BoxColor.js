function BoxColor (props) {

    return(
        <div className="BoxColor" style={{backgroundColor: `rgba(${props.r}, ${props.g}, ${props.b})`}}>
                <h3>RGB:{props.r},{props.g},{props.b} </h3>
        </div>
    )
}

export default BoxColor