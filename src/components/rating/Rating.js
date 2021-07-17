
function Rating(props) {
    const stars = [1, 2, 3, 4, 5]
    return (
    <div>
        <h3>Rating:</h3>
    {stars.map(star => (
       star <= Math.round(props.children) ? <i class="fas fa-star"></i> : <i class="far fa-star"></i>
    ))}
    {props.child}
    </div>
    )
}

export default Rating