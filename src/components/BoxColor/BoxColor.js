import "./BoxColor.css"

function BoxColor({r, g, b}) {
    return (
        <div style={{backgroundColor: `rgb(${r},${g},${b})`, width: "30%", margin: "10px 10px"}}>
            <p style={{padding: "20px 40px"}}>Prueba</p>
        </div>
    )
}

export default BoxColor