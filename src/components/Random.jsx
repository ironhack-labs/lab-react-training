

export default function Random(props){
    const {min, max} = props;
    const random = Math.floor(Math.random() * max) + min

return(
    <div className="Random border">
        <p>Random value between {min} and {max} ={'>'} {random}</p>

    </div>
)
}