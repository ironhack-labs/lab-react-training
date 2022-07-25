function Greetings(props) {
    let result = "";
    if (props.lang ==="fr"){
        return result = (
            <div>
                <p>Bonjour</p> {props.children}
            </div>
        )
    }  
    else if (props.lang ==="de"){
        return result = (
            <div>
                <p>Hallo</p> {props.children}
            </div>
        )
    } 
    return result 
}

export default Greetings;