import './Rating.css'

const Rating = ({ children }) => {

    const stars = Math.round(children)

    const rate = (
        stars === 5 ? <div className='stars'>★★★★★</div> :
            stars === 4 ? <div className='stars'>★★★★☆</div> :
                stars === 3 ? <div className='stars'>★★★☆☆</div> :
                    stars === 2 ? <div className='stars'>★★☆☆☆</div> :
                        stars === 1 ? <div className='stars'>★☆☆☆☆</div> :
                            stars === 0 ? <div className='stars'>☆☆☆☆☆</div> :
                                stars
    )

    return rate
}

export default Rating
