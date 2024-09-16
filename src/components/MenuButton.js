import { useState } from "react";

export function MenuButton({name,country, setCountry, activeButton, setActiveButton}){
    const selectCountry = (event,countries) => {
        const {name} = event.target;
        if(countries.name === "Other"){
            setCountry("Other");
        }else{
            setCountry(countries.name)
        }

        setActiveButton(name)
    }

    return(
        <button name={name}  onClick={(event) => selectCountry(event,{name})}  className='btn border-dark rounded-1' style={{backgroundColor: activeButton === name ? 'lightblue' : null}} >{name}</button>
    );
}