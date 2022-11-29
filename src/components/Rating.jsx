import './Rating.css'

const Rating = props => {
    const rate = Math.floor(props.children)
    switch (rate) {
        case 1:
            return <p>"⭐☆☆☆☆"</p>;
        case 2:
            return <p>"⭐⭐☆☆☆"</p>;
        case 3:
            return <p>"⭐⭐⭐☆☆"</p>;
        case 4:
            return <p>"⭐⭐⭐⭐☆"</p>;
        case 5:
            return <p>"⭐⭐⭐⭐⭐"</p>
        default:
            return <p>"☆☆☆☆☆"</p>
    }
}
export default Rating