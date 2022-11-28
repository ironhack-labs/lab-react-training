import './Random.css'

const Random = props => {
    const { min, max } = props

    return (
        <>
            <h3>{Math.floor(Math.random() * max)}</h3>
        </>
    )
}
export default Random