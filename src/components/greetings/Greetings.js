
const Greetings = ({ lang, children }) => {
    let greetings = '';

    switch (lang) {
        case 'en':
             greetings= "Hello";
             break;
        case 'es':
             greetings= "Hola";
             break;
        case 'sv':
             greetings= "Hallå";
            break;
        case 'fr':
            greetings= "Salut";
            break;
    }

    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-10">
                    <div className="card-body">
                        <p>{greetings} {children}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Greetings;