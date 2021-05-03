import React from 'react'

export default function Rating(props) {
    let rating = Math.round(props.children)
    let full = String.fromCharCode(9733);
    let empty= String.fromCharCode(9734);
    let result;
    switch (rating){
        case 0:
            result = empty.repeat(5);
            break;
        case 1:
            result = full + empty.repeat(4);
            break;
        case 2:
            result = full.repeat(2) + empty.repeat(3);
            break;
        case 3:
            result = full.repeat(3) + empty.repeat(2);
            break;
        case 4:
            result = full.repeat(4) + empty;
            break;
        case 5:
            result= full.repeat(5);
            break;
    }
    return (
        <div>
            {result}
        </div>
    )
}
