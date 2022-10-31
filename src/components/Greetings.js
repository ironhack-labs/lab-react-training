import React from 'react'
import { useState } from 'react';
import greetMesage from '../greet-message.json'

 function Greetings(props) {
   

  return (
    <div class="box">
        {props.lang === "de" && greetMesage[0].de}
        {props.lang === "fr" && greetMesage[0].fr}
        {props.lang === "en" && greetMesage[0].en}
        {props.children}
       
        
    </div>



  )
}


export default Greetings;
