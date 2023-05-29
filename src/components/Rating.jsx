
function Rating (props) {

const emptyStar =  <i class="far fa-regular fa-star"></i>
const star = <i class="fas fa-regular fa-star"></i>

const totalStars = 5;
const getActiveStars = (num) => {
    return Math.round(num)
}

const activeStars = getActiveStars(props.children)

    return(
        <div className="StarsRating">   
        {[...new Array(totalStars)].map((arr, index) => {
        return index < activeStars ? star : emptyStar;
      })}
           
        </div>
    )
}

export default Rating;