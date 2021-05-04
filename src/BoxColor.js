



export default function (props) {
    const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
        const hex = x.toString(16)
        return hex.length === 1 ? '0' + hex : hex
    }).join('');
    const result = rgbToHex(props.r, props.g, props.b);

    return (
        <div className='colors' style={{ backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})` }}>
            <p> rgb({props.r}, {props.g}, {props.b})  </p>
            <p>  {result}</p>
        </div>
    )
}