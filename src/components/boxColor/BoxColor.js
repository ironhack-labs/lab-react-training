import './BoxColor.css'

const BoxColor = (props) => {
    const getBackground = (red, green, blue) => {
       const style =  { backgroundColor: getRgbColor(red, green, blue) }

       return style;    
    }

    const getRgbColor = (red, green, blue) => `rgb(${red}, ${green}, ${blue})`

    console.log(props)

    return (
        <div className="color card" style={getBackground(props.r, props.g, props.b)}>
            <h3>{getRgbColor(props.r, props.g, props.b)}</h3>
        </div>
    )
}

export default BoxColor;