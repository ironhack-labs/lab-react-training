const BoxColor = (props)=>{
const {r,g,b}=props
let backgroundColor=`rgb(${r}, ${g}, ${b})`
return(
    <div className="rgbBox" style={{backgroundColor}}>
        <p> rgb({r},{g},{b})</p>
    </div>
)


}

export default BoxColor;