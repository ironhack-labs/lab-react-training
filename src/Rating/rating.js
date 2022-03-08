import './rating.css'

function Rating(props) {
 
    function renderStars(){
        let stars = '';

        for (let i=1; i<=5; i++){
            if(Math.round(props.children) < i){
                stars += '☆';
            } else{
                stars += '★';
            }
        }

        return stars;
    }

    return(
        <div className='flex stars' style={props?.style}>
            {renderStars()}
        </div>
    );



}


export default Rating;