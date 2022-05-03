const Rating = ({ children }) => {

    let star = ""
    
    if (children < 1) {
        star = "☆☆☆☆☆"   
    }
    
     if (children >= 1 && children < 2 ) {
        star = "★☆☆☆☆"   
    }
    
     if (children >= 2 && children < 3 ) {
        star = "★★☆☆☆"   
    }
    
     if (children >= 3 && children < 4 ) {
        star = "★★★☆☆"   
    }
  if (children >= 4 && children < 5) {
        star = "★★★★☆"   
    }

  if (children == 5 ) {
        star = "★★★★★"   
    }

    return (
        <h3>{star}</h3>
    )
    
    
   
}

export default Rating