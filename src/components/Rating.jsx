import React from 'react'

function Rating(props) {
    const {children} = props;

    let rating = () => {

        switch(Math.round(children)) {
            case 0:
            return '☆☆☆☆☆';
 
            case 1:
            return '★☆☆☆☆';

            case 2:
            return '★★☆☆☆';

            
            case 3:
            return '★★★☆☆';

            case 4:
            return '★★★★☆';

            case 5:
            return '★★★★★';
            
            default: 
            return '☆☆☆☆☆';
        }
    }

    return (
    
        <div>
          <p>{rating(children)}</p>
          
        </div>
      )

}

export default Rating