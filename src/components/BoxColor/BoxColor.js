import '../Greetings/Greetings.Styles.css'

const BoxColor = (props)=>{
const {r , g , b} = props
const properties = {backgroundColor : `rgb(${r} , ${g} , ${b})`}
return (

    <div style={properties}>

        <p>rgb({r},{g},{b})</p>


    </div>
)
}

export default BoxColor;