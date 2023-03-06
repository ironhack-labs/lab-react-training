import React from "react";
import "./index.css";

function Greetings({lang, children}) {
  return (
    <div className="Greetings">
    {lang === 'de' && <h1>Hallo {children}</h1>}
    {lang === 'en' && <h1>Good morging {children}</h1>}
    {lang === 'es' && <h1>Buenos días {children}</h1>}
    {lang === 'fr' && <h1>Bonjour {children}</h1>}
    </div>
  )
}

export default Greetings