import {useState, useEffect} from 'react';

function LikeButton() {
    const [likes, setLikes] = useState(0);
    const [buttonText, setButtonText] = useState('0 Likes');
    const [buttonColor, setButtonColor] = useState('#0000FF');
    //Funciones para la funcion
    const like = () => {
        setLikes(likes => likes+1);
    }

    function GetRandomColor() {
        const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        console.log('Random Color',randomColor);
        return randomColor;
    }

    //Cambiar texto y color del boton cuando likes se actualiza
    useEffect(()=>{
        if(likes>0) {
            if(likes===1) setButtonText('1 Like');
            else setButtonText(`${likes} likes`);

            setButtonColor(GetRandomColor());
        }
    },[likes])

    return (
        <div className="likeButton">
            <button onClick={() => like()} style={{backgroundColor:buttonColor}}>{buttonText}</button>
        </div>
    );
}

export default LikeButton;