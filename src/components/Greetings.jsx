import "../styles/Greetings.css"

const Greeting = ({lang}) => { 
    if (lang == "fr") return (<p className="greeting">Bonjour François</p>)
    else if (lang == "de") return (<p className="greeting">Hallo Ludwig</p>)
    else if (lang == "cn") return (<p className="greeting">你好吗</p>)
}
export default Greeting