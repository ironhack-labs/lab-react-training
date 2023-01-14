import './Greetings.css'

function Greetings(props){
    const {lang, children} = props
    console.log("here")
    console.log(children)
    return(
        <div className="elegant">
            {lang === "fr"
            ? <p>Bonjour Mr. {children}     </p>
            : <p>Gütten Tag Herr {children}     </p>
            }
        </div>
    )
}

export default Greetings