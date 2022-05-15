export default function BoxColor(props) {
    const {r, g, b} = props;
    const color = `rgb(${r}, ${g}, ${b})`;

    return (
        <div className="box" style={{ backgroundColor: color }}>
        <h3>Background Color: {color}</h3>
        </div>
    )
}