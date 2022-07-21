import IdCard from "./IdCard";





function Greetings(props) {


    let hiLang = 'Hello'
    if(props.lang==='de') {
        hiLang = 'Hallo'
    }
    else if (props.lang==='fr') {
        hiLang = 'Bonjour'
    }
    else if(props.lang==='es') {
        hiLang = 'Hola'
    }
return (
<div className="hello">
{hiLang}, {props.children}
</div>

)
}
export default Greetings;