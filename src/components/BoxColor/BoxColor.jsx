import './BoxColor.css'
const BoxColor = ({ r, g, b }) => {
    const color = (`rgb(${r}, ${g}, ${b})`)

    return <div style={{ backgroundColor: color }} className="boxColor">ckscnjksc</div >;

}
export default BoxColor