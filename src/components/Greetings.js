function Greetings(props) {
    let helloText = "";

        if (props.lang == "de") {
            helloText = "Hallo"

        } else if (props.lang == "fr") {
            helloText = "Bonjour"
        }
        return(

            <p>{helloText + " " + props.children}</p>

        )
    
};


export default Greetings;
