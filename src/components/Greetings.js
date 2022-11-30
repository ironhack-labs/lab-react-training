const Greetings = props => {
    const { lang, children} = props;
    return (
        <div>
            {lang === "es" ? <h3>Hola {children}</h3> : <h3>Hallo {children}</h3>}
        </div>
    )
}

export default Greetings;
