import React from 'react';
import { useState } from 'react';
import './Greetings.css'

export default function Greetings({ lang, children }) {
    const getHello = (lang) =>{
        switch(lang){
            case "de":
                return "Hallo"
            case "en":
                return "Hello"
            case "es":
                return "Buenos dias"
            case "fr":
                return "Bonjour"
        }
    }
  return <div className="helloBlock">{getHello(lang)} {children}</div>;
}
