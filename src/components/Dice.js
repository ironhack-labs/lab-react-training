export default function Dice() {
    var images = [],
    index = 0;
    images[0] = <img src="./assets/images/dice-empty.png" alt="" />;
    images[1] = <img src="./assets/images/dice1.png" alt="" />;
    images[2] = <img src="./assets/images/dice2.png" alt="" />;
    images[3] = <img src="./assets/images/dice3.png" alt="" />;
    images[4] = <img src="./assets/images/dice4.png" alt="" />;
    images[5] = <img src="./assets/images/dice5.png" alt="" />;
    images[6] = <img src="./assets/images/dice6.png" alt="" />;
    index = Math.floor(Math.random() * images.length);
    
    return (images[index]);
    
}




