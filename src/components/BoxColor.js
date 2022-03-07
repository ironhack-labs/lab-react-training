function BoxColor(props) {
     
    let hexColor = "#" + ((1 << 24) + (props.r << 16) + (props.g << 8) + props.b).toString(16).slice(1);

    return (
        <div className="boxColor" style={{backgroundColor:`rgb(${props.r}, ${props.g}, ${props.b})`}}>
            <article>rgb({props.r},{props.g},{props.b}) </article>
            <article>{hexColor}</article>
        </div>
    )
}

export default BoxColor;