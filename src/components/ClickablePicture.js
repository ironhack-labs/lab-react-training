const ClickablePicture = ({ img, imgClicked }) => {
    return (
        <article>
            <img src={img} />
            <img src={imgClicked} />
        </article>
    )
}

export default ClickablePicture