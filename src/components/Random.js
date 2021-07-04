const Random =({min, max})=>{

    const randNum = Math.floor(Math.random() * (max-min+1)+min)
    return (
        <div className = "container" style= {{border:'1px solid black'}}>Random value between ${min} and ${max} => ${randNum}</div>
    )
}

export default Random