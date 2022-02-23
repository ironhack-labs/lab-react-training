import "./BoxColor.css"

const BoxColor = ({ r, g, b }) => {

    let divStyle = {
        backgroundColor: `rgb(${r},${g},${b})`,
        width: 200,
        height: 50
    }

    return (


        <div style={divStyle}>rgb({r},{g},{b})</div>




    )

}



export default BoxColor

