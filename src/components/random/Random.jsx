function Random(props) {
    const { min, max } = props;
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return (<div>
        {min >= max ? <div>Min not bigger than max</div> : <div>Random value between {min} and {max} {`=>`} {randomNumber}</div>}
    </div>);
}
export default Random;