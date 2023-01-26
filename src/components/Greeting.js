function Greeting (props){
    if (props.user.nationality === "en"){return <p>Hello! Your Email is: {props.user.email}. Your Email address is correct!</p>}
    else if (props.user.nationality === "fr"){return <p>Bounjour! Your Email is: {props.user.email}. Your Email address is correct!</p>}  
    else if(props.user.nationality === "de"){return <p>Hallo! Your Email is: {props.user.email}. Your Email address is correct!</p>}
    

        return (
            <div>
            <p>Select nationality!</p>
            </div>
        )
}

export default Greeting