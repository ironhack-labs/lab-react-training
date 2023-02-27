import CardImage from "../CardImage/CardImage";
import CardInfo from "../CardInfo/CardInfo";
import "./IdCard.css"
function IdCard({ userInfo }) {
    const { firstName,
        lastName,
        gender,
        height,
        birth,
        picture
    } = userInfo
    const fullName = `${firstName} ${lastName}`
    return (
        <div className="IdCard">
            <CardImage userInfo={{ fullName, picture }} />
            <CardInfo userInfo={{ firstName, lastName, gender, height, birth }} />
        </div>

    );
}

export default IdCard;
