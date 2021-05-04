

export default function (props) {
    console.log(props)
    if (props.lang === 'de') {
        return (
            <div className='container'>
                <p>Hallo {props.children}</p>
            </div>
        )
    };
    if (props.lang === 'en') {
        return (
            <div className='container'>
                <p>Hello {props.children}</p>
            </div>
        )
    };
    if (props.lang === 'fr') {
        return (
            <div className='container'>
                <p>Bonjour {props.children}</p>
            </div>
        )
    } else {
        return (
            <div className='container'>
                <p>Hola {props.children}</p>
            </div>
        )
    }

}