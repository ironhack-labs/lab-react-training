function Rating(props){
    const stars = Math.round(props.children)
    return(
        <h1>{[...Array(5)].map((item, index) => index < stars ? "★" : "☆")}</h1>
    )
}

export default Rating