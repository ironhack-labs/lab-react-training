import './BoxColor.css'

const BoxColor = (props) => {
    console.log(props);
    const divStyle = { backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})` }

    return (
        <figure style={divStyle} className="boxColor">
            <p>rgb({props.r}, {props.g}, {props.b})</p>

        </figure >

    )


}


export default BoxColor;