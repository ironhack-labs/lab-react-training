import React from "react";
import {useState} from "react"


function Greetings (props) {
    const [language, setLanguage] = useState("en")
    return(
        <div>
 {/* Iteration 2: Language Selector (Greetings Component) */}
{/* Creates a language selector box */}
<select onChange={(e) => setLanguage(e.target.value)} value={language}>
        <option value="en">English</option>
        <option value="de">German</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
</select>

{/* Returns content based on selected language */}
{language === "en" && <p>Hello! Welcome to our website</p>}
{language === "de" && <p>Hallo! Willkommen auf unserer Webseite</p>}
{language === "es" && <p>Hola! Bienvenido a nuestro sitio web.</p>}
{language === "fr" && <p>Bonjour! Bienvenue sur notre site web.</p>}
        </div>
    )
}

export default Greetings