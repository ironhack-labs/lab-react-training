function Greetings(props) {
    return (
        <div className="Greetings">
            {props.lang === 'de' ? 'Hallo ' : 'Bonjour '}
            {props.children}
        </div>
    )
}

export default Greetings