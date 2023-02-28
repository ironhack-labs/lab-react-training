import React from 'react'

function Rating (props) {
    const {children} = props;

    function star(children) {

    if (children<0.9) return '☆☆☆☆☆';

    else if (children<1.9) return '★☆☆☆☆';

    else if (children<2.9) return '★★☆☆☆';

    else if (children<3.9) return '★★★☆☆';

    else if (children<4.9) return '★★★★☆';

    else return '★★★★★';
    }
    return (
      <div>
          <p>{star(children)}</p>
      </div>
    );
  }

export default Rating

