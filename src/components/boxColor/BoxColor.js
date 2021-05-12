import './BoxColor.css'

const BoxColor = (props) => {
    const getBackground = (red, green, blue) => {
       return { backgroundColor: getRgbColor(red, green, blue) };
    }

    const getRgbColor = (red, green, blue) => `rgb(${red}, ${green}, ${blue})`;

    return (
        <div className="color card" style={getBackground(props.r, props.g, props.b)}>
            <h3>{getRgbColor(props.r, props.g, props.b)}</h3>
        </div>
    )
}

export default BoxColor;