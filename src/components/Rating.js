function Rating(props) {

        if (props.children < 0.5) {
            return (<h1>☆☆☆☆☆</h1>)
        }
        else if (props.children < 1.5) {
            return (<h1>★☆☆☆☆</h1>)
        }
        else if (props.children < 2.5 ) {
            return (<h1>★★☆☆☆</h1>)
        }
        else if(props.children < 3.5) {
            return (<h1>★★★☆☆</h1>)
        }
        else if(props.children < 4.5) {
            return (<h1>★★★★☆</h1>)
        }
        else return (<h1>★★★★★</h1>)
}
export default Rating;