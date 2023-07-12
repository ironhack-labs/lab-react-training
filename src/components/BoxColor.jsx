function BoxColor(props){

    const {r, g, b} = props

    const hexString = "#" +
        ((r < 16) ? "0" : "") + r.toString(16) +
        ((g < 16) ? "0" : "") + g.toString(16) +
        ((b < 16) ? "0" : "") + b.toString(16);
        
        return(
            <div className="card" style={{ backgroundColor : hexString}}>
                <div className="cardBody">
                    <p>rgb({r},{g},{b})</p>
                    <p>{hexString}</p>
                </div>
            </div>
        )
    
}

export default BoxColor