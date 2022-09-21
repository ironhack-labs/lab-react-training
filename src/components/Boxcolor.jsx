const Boxcolor = (props) => {

    let divStyle = { backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})` }

    return (
        <>
            <div style={divStyle}>
                <p className="colorNumbers">
                    rgb({props.r}, {props.g}, {props.b})
                </p>

            </div>
        </>


    )

}

export default Boxcolor