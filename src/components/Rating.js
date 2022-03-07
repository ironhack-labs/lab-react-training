function Rating(props) {
    let rate = Math.round(props.children)
    let stars = []
    
    for (let i = rate; i > 0; i--) {
        stars.push('estrela')
    }
    
    for (let j = (rate+1); j < 6; j++) {
        stars.push (`branco`)
    }

    // for (let j = (5-rate); j > 0; j--)
    // {
    //     stars.push (`branco`)
    // }

    return (
        <div className="star">
        
            {stars.map((currentStar) => {
                if (currentStar === "estrela") {
                    return  <span>&#9733;</span>;
                } 
                if (currentStar === "branco") {
                    return  <span>&#9734;</span>
                }             
            })}
        </div>
    )
}

export default Rating;