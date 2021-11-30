import './Rating.css'

const Rating = (props) => {
    const { children } = props;
    let rating = []

    for(let i = 0; i < Math.round(children); i++){
        rating.push("★")
    }
    for(let i = Math.round(children); i < 5; i++){
        rating.push("☆")
    }
    return( 
        <div className="Rating">
            {rating.map(star => star)}
        </div>
    );
  }
  
  export default Rating;