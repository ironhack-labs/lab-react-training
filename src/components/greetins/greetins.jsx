import "./greetins.css"

function Greetins({lang, children}) {

 return <>
            <div className="greetinsBox">
            <p>Hello {lang} {children} </p>
            </div>
        </>
}

export default Greetins;

