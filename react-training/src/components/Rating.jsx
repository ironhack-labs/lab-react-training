const Rating = ({ children }) => {

    const star1 = Math.round(children) >= 1 ? 'fas fa-star' : 'far fa-star'
    const star2 = Math.round(children) >= 2 ? 'fas fa-star' : 'far fa-star'
    const star3 = Math.round(children) >= 3 ? 'fas fa-star' : 'far fa-star'
    const star4 = Math.round(children) >= 4 ? 'fas fa-star' : 'far fa-star'
    const star5 = Math.round(children) >= 5 ? 'fas fa-star' : 'far fa-star'

    return (
        <>
            <div >
                <i className={star1} data-testid="heart-icon"></i>
                <i className={star2} data-testid="heart-icon"></i>
                <i className={star3} data-testid="heart-icon"></i>
                <i className={star4} data-testid="heart-icon"></i>
                <i className={star5} data-testid="heart-icon"></i>
            </div>
        </>
    )
}

export default Rating