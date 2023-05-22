import './Greetings.css'

const Greetings = ({ lang }) => {

    const idom = lang === "fr" ? 'Ludwig' : 'François'
    return (
        <p className='idiom'>{idom} </p>
    )

}

export default Greetings

