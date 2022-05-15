export default function Random(props){

    const {min, max} = props;

    const renderNumber = () => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return (
        <div className="box">
            <h3>Random number between {min} and {max}: {renderNumber()}</h3>
        </div>
    )
}