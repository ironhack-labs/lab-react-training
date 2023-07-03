function LikeButton( { likeCounter, setLikeCounter }) {
    const moreLikes = () => setLikeCounter(likeCounter + 1);

    return (
      <div className="likeBtn-box">
        <button onClick={moreLikes}>{likeCounter} Likes</button>
      </div>
    );
  }
  
  export default LikeButton;
