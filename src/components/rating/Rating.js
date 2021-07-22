function Rating (props) {
    const stars = [1, 2, 3, 4, 5]

    return(
        <div className="rating">
            {stars.map(star => (
                <i 
                style={{ color: star <= Math.round(props.children) ? 'blue' : 'grey'}}
                class="fa fa-star" 
                aria-hidden="true"></i>
            ))}
        </div>
    )
}


export default Rating