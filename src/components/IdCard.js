function IdCard(props){

    return(
        <div id="card">
            <img src={props.picture}/>
            <div id='info'>             
                <span><b>First name: </b>{props.firstName}</span>           
                <span><b>Last name: </b>{props.lastName}</span>             
                <span><b>Gender: </b>{props.gender}</span>              
                <span> <b>Height: </b>{props.height}</span>                
                <p><b>Birth: </b>{props.birth.toDateString()}</p>
            </div>
        </div>
    )
}

export default IdCard;