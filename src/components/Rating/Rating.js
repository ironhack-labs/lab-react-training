function Rating({ children}) {
    const filledStars = Math.round(children);
    const emptyStars = 5 - filledStars;
        return (
          <h3 className="border text-start rating">
            {'★'.repeat(filledStars) + '☆'.repeat(emptyStars)}
          </h3>
        );
}

export default Rating;
