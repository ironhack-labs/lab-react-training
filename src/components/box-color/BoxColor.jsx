import "./box-color.css"

function BoxColor(props) {
    const { r, g, b } = props;
    const rgb = `rgb(${r}, ${g}, ${b})`;

    console.log(rgb);
    return (<div className="box-color" style={{ backgroundColor: rgb }}></div>)
}

export default BoxColor;