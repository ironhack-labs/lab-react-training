const Rating = (props) => {

    const printStars = () => {
        let stars = ["☆", "☆", "☆", "☆", "☆"]
        const rating = Math.round(props.children)
        
        for (let i = rating; i > 0; i--) {
            stars.pop()
            stars.unshift("★")
        }
        
        return stars
    }

    return (
        <p> {printStars()}</p>
    )
}

export default Rating