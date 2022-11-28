import '../Greetings/Greetings.css'

const Greetings = props => {

    const { lang, children } = props
    return (
        <section className='Greetings'>
            {props.children}

            <p>{lang}Ludwig</p>
            <p>François</p>



        </section>
    )
}
export default Greetings