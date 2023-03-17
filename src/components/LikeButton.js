import { useState } from "react";

function LikeButton(){
    const [countCor, setcountCor] = useState(0);
    const [countLike, setcountLike] = useState(0);

    const cores = ['purple','blue','green','yellow','orange','red'];
    const background = cores[countCor]
    
    const incrementoCor = () => {
            if(countCor === 5){
                setcountCor(0);
            }else{
                setcountCor(countCor + 1);
            }
        setcountLike(countLike + 1);
     };
    
    return <button className="button-like" style={{backgroundColor:background}} onClick={incrementoCor}> {countLike} Likes </button>
   
   
};

export default LikeButton