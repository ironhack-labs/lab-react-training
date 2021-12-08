import { Outlet } from "react-router-dom"

const language = ["de","en","es","fr"]
let hello = ['Hallo', 'Hi','Arre','Bonjour']
let findLang=0
let word = ""

const Greetings = ({lang}) => {

    findLang = language.indexOf(lang)
    word = hello[findLang]
    return (
        <>

        <div style={{borderStyle: "solid", margin:5}}>
        
            <p>{word}</p>
            <Outlet/>
        </div>
        </>
    )
}

export default Greetings
