
function CardImage({ userInfo }) {
    const { fullName, picture } = userInfo

    return (
        <figure>
            <img src={picture} alt={fullName} />
        </figure>
    );
}

export default CardImage;
