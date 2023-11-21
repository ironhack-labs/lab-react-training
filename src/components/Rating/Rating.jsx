import './Rating.css'

const Rating = ({ children }) => {

    switch (Math.round(children)) {
        case 0:
            return <p className='rating'>☆☆☆☆☆</p>
        case 1:
            return <p className='rating'>★☆☆☆☆</p>
        case 2:
            return <p className='rating'>★★☆☆☆</p>
        case 3:
            return <p className='rating'>★★★☆☆</p>
        case 4:
            return <p className='rating'>★★★★☆</p>
        case 5:
            return <p className='rating'>★★★★★</p>
    }
}

export default Rating