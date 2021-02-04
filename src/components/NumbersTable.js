import React from 'react';
import '../css/App.css';

export default function NumbersTable({limit}) {

    let html = '';

    for (let index = 1; index <= limit; index++) {
        html += `<p ${index%2 == 0 ? 'style="background-color: red"' : ''}>${index}</p>`;
    }

    return (
        <div className='numbersCont' dangerouslySetInnerHTML={{__html: html}}/>
    )

} 
