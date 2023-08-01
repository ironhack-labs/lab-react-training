function LikeButton({ likes, setLikes }) {
  const likeFunction = () => {
    setLikes(likes + 1);
    return likes;
  };
  return (
    <div>
      <button
        onClick={() => {
          likeFunction();
        }}
      >
        Like
      </button>
      <p>{likes} likes</p>
    </div>
  );
}

export default LikeButton;
