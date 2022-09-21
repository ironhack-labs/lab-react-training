function idCard(props){
    return(
        <div className="card">
            <div className="card-img">
            <img src={props.picture} alt=""/>
            </div>
            <div className="card-info">
                <span><strong>LastName: </strong>{props.lasName}</span>
                <span><strong>Gender: </strong>{props.gender}</span>
                <span><strong>Heigth: </strong>{props.height}</span>
                <span><strong>Birth: </strong>{props.birth}</span>
                <span><strong>FirsName: </strong>{props.firstName}</span>                

            </div>
        </div>
    )
}

export default idCard