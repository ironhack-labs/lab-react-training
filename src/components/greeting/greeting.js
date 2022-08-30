

function Greeting({lang, children}) {
let list = {
  de: "hallo",
  en: "",
  es: "",
  fr:"bonjour"
}

return(
<div className="p-1 border border-success col-2 m-1">
  {list[lang]}{children}
</div>
  )
}

export default Greeting