import "./BoxColor.css"

function BoxColor(props){
    const { r, g, b } = props
    return(
        <div style={{backgroundColor: `rgb(${r},${g},${b})` }} className="Box">
        </div>
    )
}

export default BoxColor