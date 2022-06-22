import React from 'react';
import './BoxColor.css';
import { userState } from 'react';

export default function BoxColor({r,g,b}) {
    const getHexa = (r,g,b) =>{
        return `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`
    }
  return (<div className="BoxColor" style={{backgroundColor:getHexa(r,g,b)}}>
    <p>rgb({r},{g},{b})</p>
    <p>{getHexa(r,g,b)}</p>
    </div>)
}
