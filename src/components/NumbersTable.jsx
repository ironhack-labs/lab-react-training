function NumbersTable(props){

    return (
        <div className="row">
            {[...Array(props.limit)].map((number, index)=>{
        
                const color = ((index + 1) % 2 === 0) ? "red" : "white"
                return (
                    <div className="col-1" key={index} style={{backgroundColor: color}} >
                        {index+1}
                    </div>
                )
            })}
        </div>
        
    )


}

export default NumbersTable