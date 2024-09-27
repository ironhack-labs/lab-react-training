function Greetings(props) {
    let language = props.lang;
    let children = props.children;
    let greeting = "";
    if(language === "de"){greeting = "Hallo"
    } if(language === "fr"){greeting = "Bonjour"
    } if(language === "es"){greeting = "Hola"
    } if(language === "en"){greeting = "Hello"
    }
   
    return (
    <div className="langdiv">
        <p>{greeting}, {children}</p>
    </div>
  )
}

export default Greetings