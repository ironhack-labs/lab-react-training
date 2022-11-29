import('./like-button.css')

const LikeButton = (props) => {
    let count = 0

    return (
        <button id='like-button' className='like-button' onClick={() =>
            count++}>
            {count} Like
        </button >
    )
}

export default LikeButton