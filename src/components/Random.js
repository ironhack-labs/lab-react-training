

function Random(props) {
const {min, max} = props


const divStyle = {
    display: "flex",
    border: "1px solid black",
    alignItems: "center",
    margin: 10
}
const randomNumber = Math.floor(Math.random() * (max - min)) + min

return(
    <div style={divStyle}>

    <p> Random value between {min} and {max} : {randomNumber}</p>
    </div>
)

}

export default Random