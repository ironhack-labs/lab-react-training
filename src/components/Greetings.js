import React from 'react'

function Greetings(props) {
    const {lang, children} = props;
    function langChoose () {
      if (lang ==="de") return 'Hallo'
      else if (lang ==="en") return 'Hi'
      else if (lang ==="es") return 'Hi'
      else if (lang ==="fr") return 'Bonjour'
    }
    return (
    <div>
        <span className='lang'>{langChoose()} {children}</span>
    </div>
    ) 
}

export default Greetings