import './Rating.css';

const Rating = ({children}) => {
    let starsArray = [`\u2606`, `\u2606`, `\u2606`, `\u2606`, `\u2606`];
    const stars = Math.round(parseFloat(children))
    for(let i=0; i<stars;i++){
        starsArray[i] = `\u2605`
    }
    return (
        <div className="rating">
            {starsArray}
        </div>
    )
}

export default Rating