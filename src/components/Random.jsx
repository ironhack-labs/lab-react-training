function Random(props) {
const min = props.min
const max = props.max
    return (
<div>
    <p>Random value between {min} and {max} =&gt; {Math.floor(Math.random() * (max - min)) + min}</p>
</div>
    )
}

export default Random