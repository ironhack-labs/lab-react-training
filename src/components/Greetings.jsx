const Greeting = props => {

    const { lang, children } = props
     
    
    return (
        <div className='Greetings'>
            {lang === "de" && (<p> Hello {children}</p>)} 
            {lang === "en" && (<p>Hello {children}</p>)}
            {lang === "es" && (<p>Hello {children}</p>)}
            {lang === "fr" && (<p>Hello {children}</p>)}

        </div>
    )
}
export default Greeting
