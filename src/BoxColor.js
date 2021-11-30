const BoxColor = (props) =>{
const {r,g,b} = props;
const properties = {backgroundColor: `rgb(${r},${g},${b})`};
return (
    <div className="BoxColor" style={properties}>
    <p>
        rgb({r},{g},{b})
    </p>
    </div>
)
}
export default BoxColor