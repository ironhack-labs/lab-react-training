import 'bootstrap/dist/css/bootstrap.min.css'
import "./Component.css"

function IdCard (props) {
    const idInfo = [
        {title: "First name:", info:props.firstName},
        {title: "Last name:", info: props.lastName},
        {title: "Gender:", info:props.gender},
        {title: "Height:", info: props.height/100 + "m"},
        {title: "Birth:", info: props.birth.toDateString()}
    ]

return (
   <div className = "card">
        <div>
            <img className="imgProfile" src={props.picture} alt = {props.firstName}/>
        </div>
        <div>
            {idInfo.map(({title, info}) => {
                return <p className="text"><strong>{title}</strong> {info}</p>
            })}
            {/* <p className="text"><strong>First name:</strong> {props.firstName}</p>
            <p className="text"><strong>Last name:</strong> {props.lastName}</p>
            <p className="text"><strong>Gender:</strong> {props.gender}</p>
            <p className="text"><strong>Height:</strong> {(props.height/100)}m</p>
            <p className="text"><strong>Birth:</strong> {props.birth.toDateString()}</p> */}
        </div>
    </div>
    )
}

export default IdCard