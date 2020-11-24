import React from 'react'

export default function Rating({children}){
    if ({children} < 1){
        <div style={{display:"flex"}}>
            <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
            <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
            <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
            <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
            <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
        </div>
    } else if ({children} > 1 && {children} < 2){
        <div style={{display:"flex"}}>
            <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
            <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
            <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
            <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
        </div>
//se pinta 1 rellena
    } else if ({children} > 2 && {children} < 3){
        <div style={{display:"flex"}}>
            <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
            <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
            <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
        </div>
    //se pintan 2 rellenas
    } else if ({children} > 3 && {children} < 4){
        <div style={{display:"flex"}}>
            <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
            <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
        </div>
//se pintan 3 rellenas
    } else if ({children} > 4 && {children} < 5){
        <div style={{display:"flex"}}>
             <img src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-star-5.png"/>
        </div>
//se pintan 4 rellenas
    } else {
        <div style={{display:"flex"}}>
        
        </div>
//se pintan 5 rellenas
    }}
    return <div style={{width:"200px", height:"30px"}}>{children}</div>
  }
