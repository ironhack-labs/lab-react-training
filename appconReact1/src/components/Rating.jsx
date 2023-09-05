const Rating = ({ children }) => {

    const maxStars = 5
    const fullStars = Math.floor(children)
    const media = children - fullStars

    const stars = []

    for (let i = 0; i < fullStars; i++) {
        stars.push('★')
    }

    if (media >= 0, 5) {
        stars.push('★')
    }

    for (let i = stars.length; i < maxStars; i++) {

        stars.push('☆')
    }

    return (

        <div>{stars}</div>
    )

}

export default Rating