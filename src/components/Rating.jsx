const Rating = ({ prop }) => {
    if(prop < 1 ) {
        return("☆☆☆☆☆")
    } else if (prop === 1 || prop < 2) {
        return ("★☆☆☆☆")
    } else if (prop === 2 || prop < 3) {
        return ("★★☆☆☆")
    } else if (prop === 3 || prop < 4) {
        return ("★★★☆☆")
    } else if (prop === 4 || prop < 5) {
        return ("★★★★☆")
    } else if (prop === 5 || prop < 6) {
        return ("★★★★★")
    }

  return (
    <div >

    </div>
  );
};

export default Rating;
