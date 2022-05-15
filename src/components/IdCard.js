export default function IdCard(props) {

    const {lastName, firstName, gender, height, birth, picture} = props;

    return (
        <div className="flex-row box">
        <img src={picture} alt="profile" />
        <div>
        <p>Name: {firstName + " " + lastName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Birth: {birth}</p>
        </div>
        </div>
    )
}