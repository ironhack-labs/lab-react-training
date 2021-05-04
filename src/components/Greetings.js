function Greetings(lang, children) {
    if (lang == "de") {
      return <div>Hallo {children}</div>
    }
  
    if (lang == "en") {
      return <div>Hello {children}</div>
    }
  
    if (lang == "es") {
      return <div>Hola {children}</div>
    }
  
    if (lang == "fr") {
      return <div>Salut {children}</div>
    }
  
  }