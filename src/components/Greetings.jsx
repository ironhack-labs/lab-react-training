import React from 'react'
import BlackBox from './BlackBox'

export default function Greetings({ lang, children }) {

  const langConfig = {
    de: "Hallo",
    en: "Hello",
    es: "Holi",
    fr: "Bonjour"
  }

  return (
    <BlackBox>
      {langConfig[lang]} {children}
    </BlackBox>
  )
}
