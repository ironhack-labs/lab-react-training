function BoxColor(props) {

const recColor = `rgb(${props.r},${props.g},${props.b})`


return (
    <div className="rectangle" style={{backgroundColor: recColor}}>
<p>
rgb({props.r},{props.g},{props.b})

</p>
    </div>
)


}
export default BoxColor;