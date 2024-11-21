const Rating = ({ children }) => {
 const roundedValue = Math.round(children)
 const stars = Array(5)
 .fill('☆')
 .map((star, index) => 
    (index < roundedValue ? '★': '☆'))

 return(
    <div>
        {stars.join('')}
    </div>
 )
}

export default Rating
