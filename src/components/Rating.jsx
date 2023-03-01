import React from 'react'

function Rating(props) {
    const nivel = stars => `★★★★★☆☆☆☆☆`.slice(5 - stars, 10 - stars);
    if(nivel >= "0"){
        return <p>☆☆☆☆☆ {props.children}</p>
      }   
      else if(nivel >= "1.49"){
        return <p> ★☆☆☆☆{props.children}</p>
      }
      else if(nivel >= "1.5"){
        return <p> ★★☆☆☆{props.children}</p>
      }
      else if(nivel >= "3"){
        return <p> ★★★☆☆{props.children}</p>
      }
      else if(nivel >= "4"){
        return <p> ★★★★☆{props.children}</p>
      }
      else if(nivel == "5"){
        return <p> ★★★★★{props.children}</p>
      }
}

export default Rating