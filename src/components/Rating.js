function Rating(props){
    const {children} = props

        if (Math.round(children) === 1) {
          return <div>★☆☆☆☆</div>;
        }
        if (Math.round(children) === 2) {
          return <div>★★☆☆☆</div>;
        }
        if (Math.round(children) === 3) {
          return <div>★★★☆☆</div>;
        }
        if (Math.round(children) === 4) {
          return <div>★★★★☆</div>;
        }
        if (Math.round(children) === 5) {
          return <div>★★★★★</div>;
        }

     
}

export default Rating
