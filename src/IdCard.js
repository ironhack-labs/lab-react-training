
function IdCard(props) {
    console.log(props)
    let student = '';
if(props.data.student){
    student = 'true';
} else {
    student = 'false';
}

return (
<div>
<div>{props.data.lastName}</div>
<div>{props.data.firstName}</div>
<div>{props.data.country}</div>
<div><img src={props.data.img} alt='student'></img></div>
<div>{student}</div>
</div>
)
}

export default IdCard;