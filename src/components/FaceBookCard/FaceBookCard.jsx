import CardImage from "../CardImage/CardImage";
import FaceBookInfo from "../FaceBookInfo/FaceBookInfo";
import "./FaceBookCard.css";

function FaceBookCard({ info }) {
    const { firstName, lastName, country, isStudent, img } = info
    const fullName = `${firstName} ${lastName}`

    return (
        <div className="FaceBookCard">

            <CardImage userInfo={{ fullName, picture: img }} />
            <FaceBookInfo {...info} />
        </div>
    )

}
export default FaceBookCard;