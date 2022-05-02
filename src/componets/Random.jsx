const Random = ({ min, max }) => {
    let floor = Math.floor(Math.random() * (max - min)) + min
    return (<div>
        <p>{floor}</p>
    </div>)

}
export default Random