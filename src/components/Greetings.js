
//Al momento de deconstruir siempre debe de ingresarse dentro de la función.
function Greetings(props){
    const {children,lang}=props
    return(
        <div className="card">
            {lang==="de"&& <p>Hallo {children} </p>}
            {lang==="en"&& <p>Hello {children} </p>}
            {lang==="es"&& <p>Hola  {children} </p>}
            {lang==="fr"&& <p>Bonjour {children} </p>}
        </div>
    )
}

export default Greetings