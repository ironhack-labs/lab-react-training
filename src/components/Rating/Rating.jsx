
function Rating({ children }) {
    const rate = Math.round(children);
    const stars = Array.from({ length: 5}, (_, index) => {
        if (index < rate) {
            return '★'; 
          } else {
            return '☆';
          }
    });
  
    return (
    <div>{stars}</div>
  )
}

export default Rating