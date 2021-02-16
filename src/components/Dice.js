import React, { useState } from 'react';

const styles = {
    width : 200,
    height: 200
}
function Dice(){
    const [random, setRandom] = useState('/img/dice-empty.png');
    var images = ['/img/dice3.png','/img/dice-empty.png','/img/dice6.png'];
    const randomImage = () =>{
        var r = Math.floor(Math.random() *  images.length)
        console.log("RANDOM",r)
        setRandom(images[r])
        
    }
    return(
       <img style={styles} alt="random" src={random} onClick={randomImage} />
    )
}

// por cada recarga 

//function randomImage(){
//    var images = ['/img/dice3.png','/img/dice-empty.png','/img///dice6.png'];
//    var r = Math.floor(Math.random() *  (images.length - 1)) +1
//    return images[r]
//    
//}



export default Dice