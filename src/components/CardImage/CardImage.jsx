import './CardImage.css'


function CardImage({ userInfo }) {
    const { fullName, picture } = userInfo

    return (
        <figure className='CardImage'>
            <img src={picture} alt={fullName} />
        </figure>
    );
}

export default CardImage;
