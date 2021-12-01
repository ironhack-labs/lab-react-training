import './Rating.css'

const Rating = (props)=>{
    const{children} = props
    let rating = Math.round(props.children);
    
    return(
        <div className= "Rating">
            {'★'.repeat(rating) + '☆'.repeat(5 - rating)}
        </div>
    )
}

export default Rating