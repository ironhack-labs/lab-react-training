const Greetings = (props) => {
    const { lang } = props;
    const greetingStudents = {
        "fr": "Bonjour",
        "tr": "Merhaba",
        "de": "Hallo",
        "en": "Hello",
        "es": "Hola",
        "rs": "Dobrae Ultra"
    };
    return (
        <div>
            {greetingStudents[lang]}
        </div>
    );
};

export default Greetings;