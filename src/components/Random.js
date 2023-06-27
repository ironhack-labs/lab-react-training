function Random(props){
    const random = Math.round(Math.random()*(props.max - props.min + 1) + props.min)
return(
    <div>
        <p>
            Random value between {props.min} and {props.max} =&gt; {random}
        </p>
    </div>
)
}
export default Random;