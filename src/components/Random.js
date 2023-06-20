export default function Random({min, max}) {
    const myRandom = Math.floor((max - min) * Math.random() + min);
    return (
    <div className="box-with-text">
        <p>Random value between {min} and {max} =&gt; {myRandom} </p>
    </div>);
}