const Random = ({ min, max }) => {
    const arrowString = '=>';
    return (<div className="box">Random Value between {min} and {max} {arrowString} {Math.round(Math.random() * (max - min) + min)}</div>)
}

export default Random