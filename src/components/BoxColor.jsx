export const BoxColor = (props) => {

    let backgroundColor = { backgroundColor: 'rgb(' + props.r + ', ' + props.g + ', ' + props.b + ')' }


    return (
        <div style={backgroundColor}>
            <h3>rgb({props.r},{props.g},{props.b})</h3>
            <h3>{props.r === 255 ? <h3>#ff0000</h3> : <h3> #80ff00</h3>}</h3>
        </div>
    )
}
