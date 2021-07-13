const Greetings = props => {
    return (
        <article className='greetings'>
            <p lang={props.lang} > {props.children}</p>
        </article>
    )
}

export default Greetings