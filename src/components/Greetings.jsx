function Greetings({lang, children}){
  return (
    lang === 'fr' ? <div className="box">Bonjour {children} </div> : <div className="box">Hallo {children}</div>
  )
}

export default Greetings