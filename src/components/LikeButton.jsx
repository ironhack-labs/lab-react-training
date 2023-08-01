function LikeButton({ countLike, setCountLike }) {
  const counter = () => {
    setCountLike(countLike + 1);
  };
  return (
    <div>
      <button onClick={counter}>{countLike} Likes</button>
    </div>
  );
}

export default LikeButton;
