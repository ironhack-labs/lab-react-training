function Rating(props){
    
    function giveStar(){
        let numStars = '';
        if(props.children === 0){
            return numStars = '☆☆☆☆☆'
        }
        else if(props.children > 0 && props.children < 1.5){
            return numStars = '★☆☆☆☆'
        }
        else if(props.children >= 1.5 && props.children < 2.5){
            return numStars = '★★☆☆☆'
        }
        else if(props.children >= 2.5 && props.children < 3.5){
            return numStars = '★★★☆☆'
        }
        else if(props.children >= 3.5 && props.children < 4.5){
            return numStars = '★★★★☆'
        }
        else if(props.children >= 4.5 && props.children <= 5){
            return numStars = '★★★★★'
        }
        return numStars
    }

    return(
        <div>
            <h1>{giveStar()}</h1>
        </div>
    )
}

export default Rating