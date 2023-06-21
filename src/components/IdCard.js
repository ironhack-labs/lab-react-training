function idCard(props){
    return(

        <div className="idCard">
            <img src={props.picture} alt={props.lastName}/>
            <div className="content">
                <h3>Lastname : {props.lastName}</h3>
                <h3>firstName : {props.firstName}</h3>
                <p>Gender : {props.gender}</p>
                <p>Height : {props.height}</p>
                
            </div>
        </div>
    )
}
export default idCard