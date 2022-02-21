
const Rating = ({ children }) => {  
    const rating = Math.round(children)
  
    let stars =''
    for (let index = 0; index < 5; index++) {
        if (index< rating) {
        
            stars += '★'
        } else {
            stars += '☆'
        }

    }

    return(
        <article>
            {stars}
        </article>

    )
    
}


export default Rating