function Rating (props){
    const {children} = props;

    function starAmount (){

        if (children === 0){
            return '☆☆☆☆☆'
        }
        else if(children >0 && children<1.5){
            return '★☆☆☆☆'
        }
        else if(children < 2.5 && children >=1.5){
            return '★★☆☆☆'
        }
        else if(children >= 2.5 && children < 3.5){
            return '★★★☆☆'
        }
        else if (children >=3.5 && children < 4.5){
            return '★★★★☆'
        }
        else if(children >= 4.5){
            return '★★★★★'
        }
    }
    return(
        <div><p>{starAmount()}</p></div>
    )
}
export default Rating