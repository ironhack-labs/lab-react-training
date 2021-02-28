function Greetings({ lang, children }) {    


    return (
        <div className="card text-start">
            <div className="card-body">
                {(() => {
                    switch (lang) {
                        case 'fr':
                            return (
                                <div>Bonjour {children}</div>
                                
                            )
                        case 'es':
                            return (
                                <div>Buenos Días {children}</div>
                            )
                        case 'en':
                             return (
                                <div>Hello {children}</div>
                            )
                        default:
                            return (
                                <div>Hallo {children}</div>
                            )
                    }
                })()}

            </div>
        </div>
    )

}

export default Greetings