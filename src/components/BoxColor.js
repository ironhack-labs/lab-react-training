function BoxColor(props) {

    return (
        <div style={{
            'padding': '2rem 8rem',
            'backgroundColor': `rgb(${props.r}, ${props.g}, ${props.b}`,
            'color': `color-contrast(rgb(${props.r}, ${props.g}, ${props.b}) vs white, black )`
        }}>
        <p> 
        {`rgb({props.r}, ${props.g}, ${props.b})`}
        </p>
        </div>
    )
}

export default BoxColor;