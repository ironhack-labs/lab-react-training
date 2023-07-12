function Random(props){
    const {max, min} = props
    const randomNumber = Math.ceil(Math.random() * (max - min) + min)
    
    return(
        <div className="card">
            <div className="cardBody">
                <p>Random value between {min} and {max}  { "=>"+ randomNumber}</p>
            </div>
        </div>
    )
}

export default Random