function Rating( {children} ) {
    const childrenRounded = Math.round(children);

    let starsDisplayed;
    switch(childrenRounded){
        case 0:
            starsDisplayed  = `Hallo ${children}`
        break;
        case "en":
            greeting  = `Hello ${children}`
        break;
        case "es":
            greeting  = `Hola ${children}`
        break;
        case "fr":
            greeting  = `Bonjour ${children}`
        break;
    }


    return (
      <div className="">
     
      </div>
    );
  }
  
  export default Rating;