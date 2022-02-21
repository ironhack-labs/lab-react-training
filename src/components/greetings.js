const Greetings = props => {
    const {lang,children} = props
   let salute
    switch (lang) {
        case "de":
            salute = "hallo"
        case "en":
            salute = "hello"
        case "es":
            salute = "hola"
        case "fr":
            salute = "bonjour"
    }
    return (
      <p>{salute} {children} </p>

    )
}

export default Greetings;