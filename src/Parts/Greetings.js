import React from 'react'
import {useState} from 'react'

export default function Greetings(props) {

  switch(props.lang) {
    case 'de':
      return <div class='border border-dark m-4 p-2'>Hallo {props.children}</div>
    case 'en':
      return <div class='border border-dark m-4 p-2'>Hello {props.children}</div>
    case 'es':
      return <div class='border border-dark m-4 p-2'>Hola {props.children}</div>
    case 'fr':
      return <div class='border border-dark m-4 p-2'>Bonjour {props.children}</div>
  }

}

