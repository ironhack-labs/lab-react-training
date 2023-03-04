function Greenting ({children, lang}){
   return(
    <div className='greeting'>
        {lang === 'de' && <p>Hallo {children}</p>}
        {lang === 'fr' && <p>Bonjour {children}</p>}
        {lang === 'es' && <p>Buenos dias {children}</p>}
        {lang === 'en' && <p>Good morning {children}</p>}
    </div>
    
   )
}

export default Greenting;