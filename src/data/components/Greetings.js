import React from 'react'

export default function Greeting(props) {

    if (props.theGreeting.language === 'de') {
        return <span class="task2-1" language="{{props.theGreeting.language}}">Hallo {props.theGreeting.name}</span>
    } else if (props.theGreeting.language === 'fr') {
        return <span class="task2-1" language="{{props.theGreeting.language}}">Bonjour  {props.theGreeting.name}</span>
    } else if (props.theGreeting.language === 'zh') {
        return <span class="task2-1" language="{{props.theGreeting.language}}">你好  {props.theGreeting.name}</span>
    }else if (props.theGreeting.language === 'es') {
        return <span class="task2-1" language="{{props.theGreeting.language}}">Hola  {props.theGreeting.name}</span>
    } 

}

