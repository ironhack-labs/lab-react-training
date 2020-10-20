import React, { Component } from 'react'

const Greetings = (props) => {
   return (
    <div>
        {props.lang == 'de' &&
            <div>
                Hallo {props.children}
                </div>
        }
        {props.lang == 'fr' &&
            <div>
                Bonjour {props.children}
                </div>
        }
        {props.lang == 'bg' &&
            <div>
                 Drasti {props.children}
                </div>
        }
        {props.lang == 'en' &&
            <div>
                Hello {props.children}
                </div>
        }
    </div>
   )
}


export default Greetings