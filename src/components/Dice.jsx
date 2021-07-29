import {useState} from 'react';

function Dice() {
    const [interactable, setInteractable] = useState(true);
    const [imageUrl, setImageUrl] = useState('img/dice3.png');

    const setRandomImage = () => {
        if(interactable) {
            setInteractable(false);
            setImageUrl('img/dice-empty.png');

            setTimeout(() => {
                const rndInt = Math.floor(Math.random() * 6) + 1;
                setImageUrl(`img/dice${rndInt}.png`);
                setInteractable(true);
            }, 1000);
        }
    }

    return (
        <div className="dice">
            <img onClick={() => setRandomImage()} src={imageUrl} alt="dice"/>
        </div>
    );
}

export default Dice;