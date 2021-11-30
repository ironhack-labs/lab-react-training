
import './Rating.css'

const Rating = (props) =>{

    const { children } = props

    const printRating = () =>{
        let rating = []

        for(let i = 0; i < Math.round(children); i++){
        rating.push('★')
        }
        while(rating.length < 5){
        rating.push('☆')
        }
        return rating
    }
    
    return <p className="rating">{printRating()}</p>
}



export default Rating