const Greetings = (props) => {
    const { lang, children } = props;

    if(lang === "de"){
        return (
            <div className="greetingDiv">
                <p>Hallo {children}</p>
            </div>
        )
    }else if(lang === "en"){
        return (
            <div className="greetingDiv">
                <p>Hello {children}</p>
            </div>
        )
    }else if(lang === "es"){
        return (
            <div className="greetingDiv">
                <p>Hola {children}</p>
            </div>
        )
    }else{
        return (
            <div className="greetingDiv">
                <p>Bonjour {children}</p>
            </div>
        )
    }
};

export default Greetings;