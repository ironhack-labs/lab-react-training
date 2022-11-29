function BoxColor(props){
    const {r, g, b} = props;
    const divStyle = {
        "background-color": `rgba(${r}, ${g}, ${b})`,
        height: 150,
        border: "solid",
        "color": "white",
        "margin-top": 10, 
        "text-align": "center",
        "font-size": 40
    }
    return(
        <div style={divStyle}>
            <p>rgb({r}, {g}, {b})</p>
        </div>
    )
}

export default BoxColor;