
const Rating = (props) => {

    const stars = (num) => {
        switch (Math.floor(num)) {
          case 0:
            return '☆☆☆☆☆';
          case 1:
            return '★☆☆☆☆';
          case 2:
            return '★★☆☆☆';
          case 3:
            return '★★★☆☆';
          case 4:
            return '★★★★☆';
          case 5:
            return '★★★★★';
          default:
            return '☆☆☆☆☆';
        }
    };

    return (
        <div className="stars-line">
           {stars(props.children)}
        </div>
    );
};
  
export default Rating