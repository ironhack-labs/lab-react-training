function Rating(props){

    let stars = '';

    for(let i = 0; i < 5; i++){
        if(i < Math.round(props.children)){
            stars += '★ ';
        }
        else{
            stars += '☆ ';
        }
    }

    return(
       <h1 id="stars">{stars}</h1>
    )
}

export default Rating;