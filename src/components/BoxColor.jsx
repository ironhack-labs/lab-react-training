import './BoxColor.css'

function BoxColor({ r,g,b}) {
    

    let hexR = ""
    let hexG = ""
    let hexB = ""
    hexR = r.toString(16)
    if(hexR <10) hexR = "0" + hexR
    hexG = g.toString(16)
    if (hexG < 10) hexG = "0" + hexG
    hexB = b.toString(16)
    if (hexB < 10) hexB = "0" + hexB
    
    return (
        <div className = "boxColor" style={{
            backgroundColor: `rgb(${r}, ${g}, ${b})`,
        }}
        >
            <p>
                RGB({r},{g},{b})
            </p>
            <p>
                #{hexR}{hexG}{hexB}
            </p>
        </div>
            
        

    )
}


export default BoxColor