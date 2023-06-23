
function Rating(props) {
    const {children} = props;
    let rate = Math.round(children);

        switch(rate){
            case 0:return <div>☆☆☆☆☆</div>; break;
            case 1:return <div>★☆☆☆☆</div>; break;
            case 2:return <div>★★☆☆☆</div>; break;
            case 3:return <div>★★★☆☆</div>; break;
            case 4:return <div>★★★★☆</div>; break;
            case 5:return <div>★★★★★</div>; break;
            default:return 'No rating provided'
        }

  
}

export default Rating;