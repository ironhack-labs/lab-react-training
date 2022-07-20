
export default function BoxColor(props){

    const {r, g, b, hex} = props;
    const divStyle = {
        background: `rgb(${r}, ${g}, ${b})`,
        padding: "1em 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "0.1em solid black",
        marginBottom: "1em",
        lineHeight: "0.1"
        }
      
    return(
        <div className="BoxColor">
            <div style={divStyle}>
                <p>rgb({r},{g},{b})</p>   
                <p>{hex}</p> 
            </div>
        </div>
    )
}

