const Rating = ({ children }) => {
    const round = Math.round(children);
    let stars = ''
    if (round <= 0) {
        stars = 'no stars'
    } else {
        for (let i = 0; i < round; i++) {
            stars += '★';
        }
    }

    return (
        <header>
            {stars + '\n'}
        </header>
    )
}

export default Rating

