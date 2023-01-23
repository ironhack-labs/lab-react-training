function Greeting (props){
 
        return (
            <div>
            if (props.nationality === "en"){<p>Hello!</p>}
            else if (props.nationality === "fr"){<p>Bounjour!</p>}  
            else if (props.nationality === "de"){<p>Hallo!</p>}
            else {<p>Select nationality!</p>}
            <p>Your Email is: {props.email}</p>
            </div>
        )
}

export default Greeting