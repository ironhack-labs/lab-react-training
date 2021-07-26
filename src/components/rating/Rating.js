function Rating(props) {
    const stars = [1, 2, 3, 4, 5] 
    return(
        <div>
            {stars.map(star => (
            <i 
                className="fa fa-star"
                style={{ color: star <= Math.round(props.children) ? 'yellow' : 'grey' }}    
            ></i>
            ))}
        </div>
        
    )
}

export default Rating