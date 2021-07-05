const Greetings = ({lang, children})=>{

    const greet = lang === "de" ? "Hallo" : "Bonjour"

    return (
        <div className = "container" style= {{border:'1px solid black'}}>{greet} {children}</div>
    )
}

export default Greetings