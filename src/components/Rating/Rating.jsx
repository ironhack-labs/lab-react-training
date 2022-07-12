import './Rating.css'

const Rating = ({ children }) => {

    const num = Math.round(children)

    switch (num) {
        case 0:
            return <div><b>☆☆☆☆☆</b></div>
            break;
        case 1:
            return <div><b>★☆☆☆☆</b></div>
            break;
        case 2:
            return <div><b>★★☆☆☆</b></div>
            break;
        case 3:
            return <div><b>★★★☆☆</b></div>
            break;
        case 4:
            return <div><b>★★★★☆</b></div>
            break;
        case 5:
            return <div><b>★★★★★</b></div>
            break;

    }
}

export default Rating