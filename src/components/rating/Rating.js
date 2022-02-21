import './Rating.css'

const Rating = (props) => {

const {children} = props

const stars = Number(children).toFixed(0)

let number = ''

switch (stars) {
    case '5': 
        number = "⭑⭑⭑⭑⭑";
        break;
    case '4':
        number = "⭑⭑⭑⭑☆"
        break;
    case '3':
        number = "⭑⭑⭑☆☆"
        break
    case '2':
        number = "⭑⭑☆☆☆"
        break;
    case '1':
        number = "⭑☆☆☆☆"
        break;
    default : 
        number = "☆☆☆☆☆"
}

    return (
        <article className='stars'>
            <p> {number} </p>
        </article>
    )
}

export default Rating