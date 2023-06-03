
//use switch case for each lang
const Greetings =({lang, children}) => {
  return (
    <div className="border-solid border-2 border-blue-800 p-2 m-2">
        <p lang={lang}>{children}</p>
    </div>
  )
}

export default Greetings
