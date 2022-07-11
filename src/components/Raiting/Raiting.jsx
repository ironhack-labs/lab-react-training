import './Raiting.css'

const Raiting = ({children}) => {
    const Num = Math.round(children)
    switch (Num){
        case 0:
            return <p>'☆☆☆☆☆'</p>
            break;
        case 1:
            return <p>'★☆☆☆☆'</p>
            break;
        case 2:
            return <p>'★★☆☆☆'</p>
            break; 
        case 3:
            return <p>'★★★☆☆'</p>
            break; 
        case 4:
            return <p>'★★★★☆'</p>
            break; 
        case 5:
            return <p>'★★★★★'</p>
            break;

    }
}

export default Raiting