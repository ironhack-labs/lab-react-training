import React from 'react'

function Rating(props) {
    function rating() {
    if (props.innerHTML > 0 && props.innerHTML <= 1){
        return "0";
    } else if (props > 1 && props <=2){
        return "00";
    } else if (props > 2 && props <=3){
        return "000";
    } else if (props >3 && props <=4){
        return "0000";
    } else if (props >4 && props <=5){
        return "00000";
    }
}


    return (
        <div>
            <div>
                {rating()}
            </div>
        </div>
    )
}

export default Rating
