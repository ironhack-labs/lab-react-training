

function Greetings(props){
    let name = props.data.firstName
    let text = ""

    
if(props.data.lang ==='de') { text =`Hallo ${name}`}
else if(props.data.lang ==='en') { text =`Hello ${name}`}
else if(props.data.lang ==='es') { text =`Hola ${name}`}
else if(props.data.lang ==='fr') { text = `Bonjour ${name}`}
/* else {console.log} */

return(
<div>
<p>{text}</p>
</div>
)


}   

export default Greetings