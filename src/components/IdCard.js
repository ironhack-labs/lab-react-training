const IdCard = (props) => {
    return (
        <section className="idCard">
        <img src ={props.picture} alt="profile" />
        <div className="info">
        <div><b>First name: </b>{props.firstName}</div>
        <div><b>Last name: </b>{props.lastName}</div>
        <div><b>Gender: </b>{props.gender}</div>
        <div><b>Heigh: </b>{props.height/100}m</div>
        <div><b>Birth: </b>{props.birth.toString()}</div>
        </div>
        </section>
    )
}

export default IdCard