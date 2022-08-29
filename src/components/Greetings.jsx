import "./Greetings.styles.css"
import { useState } from 'react'

const greetings = [{
 language : "PT",
 greeting: "Olá"
 },
 {
  language: "FR",
  greeting: "Bonjour"
 },
 {language: "ES",
   greeting: "Hola" 
 }, 
 { language: "DE",
   greeting: "Halo"

 },
 {
  language:"EN",
  greeting: "Hello"
 },
 {
  language: "IT",
  greeting: "Ciao"
 },
 {
  language: "JP", 
  greeting: "こんにちは"
 }
]

export const Greetings = (props) => {
 let greetingsLanguage
 
 const {personName} = props
 
 const [style, setStyle] = useState("selectLanguage")
 const [greetingValue, setGreeting] = useState("")

 const languages = ["PT", "FR", "ES", "DE", "EN", "IT", "JP"]

 const handleClick = async(value) => {
  localStorage.setItem("language", value)
  await getLocal()
  setStyle("blockSelect")
  localStorage.removeItem("language");
 }

 const getLocal = async() => {
  const valueLang = localStorage.getItem("language")
  const greetingValue = greetings.filter((list) => list.language === valueLang)
  greetingsLanguage = greetingValue[0].greeting

  setGreeting(greetingsLanguage)
 }

 return(
  <>
   <div className="geetings">
    <div className={style}>
     <p>Select your language:</p>
      {languages.map((lang) => {
       return(
        <button onClick={() => handleClick(lang)}>{lang}</button>
       )
     })}
    </div>
   </div>
   <div>
    {greetingValue && <p className="selectLanguage">{greetingValue} {personName}</p> }
   </div>
  </>

 )
}