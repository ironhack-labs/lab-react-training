import React from 'react';

const names = {
    margin: 10,
    padding: 10,
    fontSize: 50
}

function Rating({children}){
    return <div style={names} >
    {stars({children})}
    </div>
    
}

//☆★

function stars({children}){
    if(children > 1 && children <= 1.49 ){
        return "★☆☆☆☆"
    }
    if(children >= 1.50 && children < 3){
        return "★★☆☆☆"
    }
    if(children >= 3 && children < 4){
        return "★★★☆☆"
    }
    if(children >= 4 && children < 5){
        return "★★★★☆"
    }
    if(children >= 5 ){
        return "★★★★★"
    }
    return "☆☆☆☆☆"
    
}
// class
//class Rating extends React.Component {
//    render(){
//        const ratings = ['☆☆☆☆☆','★☆☆☆☆','★★☆☆☆','★★★☆☆','★★★★☆','★★★★★']
//        // redondear
//        const rating = Math.round(this.props.children);
//        
//        const stars = ratings[rating];
//        return <div>
//            {stars}
//        </div>
//    }
//}

export default Rating