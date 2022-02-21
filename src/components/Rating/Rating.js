import "./Rating.css"

function Rating(props) {
    if(props.children >= 0 && props.children < 1) {
        return (
            <>
                <img src="../../0.png" /><br />
            </>
        )
    } else if(props.children >= 0 && props.children < 2) {
        return (
            <>
                <img src="../../1.png" /><br />
            </>
        )
    } else if(props.children > 1 && props.children < 3) {
        return (
            <>
                <img src="../../2.png" /><br />
            </>
        )
    } else if (props.children >= 3 && props.children < 4) {
        return (
            <>
                <img src="../../3.png" /><br />
            </>
        )
    } else if (props.children >= 4 && props.children < 5) {
        return (
            <>
                <img src="../../4.png" /><br />
            </>
        )
    } else if (props.children > 4 && props.children <= 5) {
        return (
            <>
                <img src="../../5.png" /><br />
            </>
        )
    }

    
}

export default Rating