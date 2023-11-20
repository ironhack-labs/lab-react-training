const Random = ({ min, max }) => {
    const arrowString = '=>';
    return (<p>Random Value between {min} and {max} {arrowString} {Math.round(Math.random() * (max - min) + min)}</p>)
}

export default Random