const Rating = ({children})=>{
    const filledStarCount = Math.round(children)
    
    const stars = [];

    for (let i = 0; i < filledStarCount; i++) {
        stars.push('★');
    }
    for (let i = stars.length; i < 5; i++) {
        stars.push('☆');
    }
    
    return (
        <div>{stars}</div>
    )
}

export default Rating