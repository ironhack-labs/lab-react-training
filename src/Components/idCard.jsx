
function IdCard(props){

    return(
       <div className="idCard">
        <img className="photo" src={props.data.picture} />
            <div className="text">
             <h2>First Name:{props.data.firstName}</h2>
             <h2>Last Name:{props.data.lastName}</h2>
             <h2>Gerder:{props.data.gender}</h2>
             <h2>Heigth:{props.data.heigth}</h2>
             <h2>Birth:{props.data.birth.toDateString()}</h2>
            </div>
       </div>
    )
}

export default IdCard