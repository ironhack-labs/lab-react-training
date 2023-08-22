import { useState } from "react";

function Greetings(props){
    const {lang, children} = props;

    const {language, setLanguage} = useState('');
    return(
        <div>
            <p></p>
            <select onChange={event => setLanguage(event.target.value)}>
                <option value="de">De</option>
                <option value="en">En</option>
                <option value="es">Es</option>
                <option value="fr">Fr</option>
            </select>
        </div>
    )
}

export default Greetings;