import './Greeting.css'

function Greeting({ lang, children }){
 
    return (
        
        <div className="card my-greeting-card mt-2">
            {lang === 'es' && 'Hola' || lang==='fr' && 'Bongour' || lang==='en' && 'Hello' || lang==='de' && 'Hallo'}
            {children}
        </div>
    )

}

export default Greeting

