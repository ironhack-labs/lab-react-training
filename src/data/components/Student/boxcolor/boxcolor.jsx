

const BoxColor = props => {
    const { r, g, b } = props
    const divStyle = {
        background: `rgb(${r},${g},${b})`,
        width: 400,
        height: 80
    }


    return (
        <div style={divStyle}>


        </div>


    )


}



export default BoxColor