function Rating({ children }) {

  const numIntStars = Math.round(children);
  const fullStar = '⭐'.repeat(numIntStars);
  const borderStar = '✰'.repeat(5 - numIntStars);

  return (
    <div className="flex justify-center">
      <div className="w-2/5 border-2 rounded-full my-2">
        {fullStar}
        {borderStar}
      </div>
    </div>
  );
}

Rating.defaultProps = {

}

export default Rating;