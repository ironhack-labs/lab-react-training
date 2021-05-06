/* eslint-disable default-case */
// Create a Greetings component with 2 props:

// lang: A string that could be ,"de","en","es","fr"
// children: A text
// Example

// <Greetings lang="de">Ludwig</Greetings>
// <Greetings lang="fr">François</Greetings>

const Greetings = props => {
    const translate = lang => {
        switch(lang) {
            case 'en':
                return "Hello";
            case 'de':
                return "Hallo";
            case 'fr':
                return "Bonjour";
            case 'es':
                return 'Hola';
        }
    }

    return (
        <div className="card">
            <h3>{translate(props.lang)} {props.children}</h3>
        </div>
    )
}

export default Greetings