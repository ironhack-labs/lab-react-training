function Rating ({children}) {
    const number = Math.round(children)
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < number) {
            stars += '★';    
        } else {
            stars += '☆';
        }
    }

    return (
        <div className="rating">{stars}</div>
    )
}

export default Rating