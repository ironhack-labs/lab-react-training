import { useState } from 'react'

function LikeBtn () {

    const [btnValue, setBtnValue] = useState(0)
  
    const increaseBtnValue = () => {
        setBtnValue(btnValue + 1);
  };

    return(
        <div>
            <button style={{width: 100, height:30}} onClick={increaseBtnValue}> {btnValue} Likes </button>
        </div>
    );
};

export default LikeBtn;