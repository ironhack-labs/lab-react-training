import './Image.css'

function Image (props) {
    const { picture } = props; 
    return (
        <div className="Image">
            <img src={picture} alt="img"/>
        </div>
    )
}
export default Image;