function Greetings(props) {
    return (
        <div>
  {/*           if({props.lang == "de"}) {
               <p>Hallo {Greetings}</p> 
            } */}
            {props.lang}
            <Greetings/>
        </div>
        
    )
}

export default Greetings