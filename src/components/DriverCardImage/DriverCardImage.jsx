import './DriverCardImage.css'
function DriverCardImage({ img, name }) {

    return (
        <figure className="DriverCardImage">
            <img src={img} alt={name} />
        </figure>
    );
}

export default DriverCardImage;
