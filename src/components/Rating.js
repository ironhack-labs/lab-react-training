

const Rating = (props) => {
    let rating = parseFloat(props.children);
    if(rating >=1.0 && rating < 1.5){
        return <div>★☆☆☆☆</div>
    }else if(rating >=1.5 && rating < 2.5){
        return <div>'★★☆☆☆'</div>
    }else if(rating >=2.5 && rating < 3.5){
        return <div>'★★★☆☆'</div>
    }else if(rating >=3.5 && rating < 4.5){
        return <div>'★★★★☆'</div>
    }else if(rating >=4.5 && rating < 5.5){
        return <div>'★★★★★'</div>
    }else{
        return <div>'☆☆☆☆☆'</div>
    }   
}

export default Rating