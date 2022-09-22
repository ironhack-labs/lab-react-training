function Greetings(props){
    const{children, lang}=props;
    return(

       <div className="card">
            {lang === "fr" && (<p>Bonjour {children}</p>)}
            {lang === "es"&& (<p>Hola {children}</p>)}
            {lang === "de" && (<p>Hallo {children}</p>)}
            {lang === "en" && (<p>Hello {children}</p>)}
        </div>
    );
}

export default Greetings;
