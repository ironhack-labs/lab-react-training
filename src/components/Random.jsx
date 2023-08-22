function Random (props){
    const {min, max} = props


    return(
        <div>
        <p> Random value between {min} and {max} is => {Math.floor(Math.random()* (max - min) + min)}</p>
        </div>
    )
}

export default Random;