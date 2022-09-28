const Greetings = (props) => {
    return (
        <div className="lang">{props.lang==="de" ? `Hallo ${props.children}` : `Bonjour ${props.children}`}</div>
    )
}

export default Greetings