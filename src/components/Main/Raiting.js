


const Raiting = ({children}) => {

         
    let redondoNum = Math.round(children)
    let stars = ""
    switch (redondoNum) {
        case 0:
          stars = '☆☆☆☆☆';
          break;
    
        case 1:
          stars = '★☆☆☆☆';
          break;
    
        case 2:
          stars = '★★☆☆☆';
          break;
    
        case 3:
          stars = '★★★☆☆';
          break;

        case 4:
         stars = '★★★★☆';
         break;

        case 5:
         stars = '★★★★★';
         break;
    
        default:
          stars = 'taco';
          break;
      }

    return (
        <div>
            {stars}
        </div>
    )
}

export default Raiting
