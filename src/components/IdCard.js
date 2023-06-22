function idCard(props){
    return(

        <div className="idCard">
            <img src={props.picture} alt={props.lastName}/>
            <div className="content">
                <p>Lastname : <span>{props.lastName}</span></p>
                <p>firstName : <span>{props.firstName}</span></p>
                <p>Gender : <span>{props.gender}</span></p>
                <p>Height : <span>{props.height}</span></p>
                
            </div>
        </div>
    )
}
export default idCard