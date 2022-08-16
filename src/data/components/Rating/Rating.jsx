import React from 'react'

function Rating(props) {

    let {children} = props;

    let roundedChildren = Math.round(children);

    switch(roundedChildren){
        case 0:
            children = '☆☆☆☆☆';
            break;
        case 1:
            children = '★☆☆☆☆'
            break;
        case 2:
            children = '★★☆☆☆'
            break;
        case 3:
            children = '★★★☆☆';
            break;
        case 4:
            children = '★★★★☆'
            break;
        case 5:
            children = '★★★★★'
            break;

    }

  return (
    <div>{children}</div>
  )
}

export default Rating