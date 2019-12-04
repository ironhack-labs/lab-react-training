import React from 'react';

import { Rates } from "../styles/components"

function RatingComponent(props){
    let calificacion = props.children;
    let feed;

    if(calificacion <= 0.9){
        feed = '-';
    }else if(calificacion <= 1.49){
        feed = '*';
    }else if(calificacion >= 1.5 && calificacion <=2){
        feed = '**';
    }else if( calificacion >= 2 && calificacion<=3){
        feed= '***';
    }else if(calificacion >= 3 && calificacion <= 4){
        feed = '****';
    }else if(calificacion >= 4 && calificacion <= 5){
        feed = '*****'
    }

    return(
        <Rates>
           <p>{feed}</p>
        </Rates>
    );
}

export default RatingComponent;