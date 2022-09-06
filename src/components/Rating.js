function Rating(props) {

  const maxStars = 5;
  const emptyStar = "☆";
  const filledStar = "★";
  return (
      <p>
        {filledStar.repeat(Math.round(props.children))} {/* il y a autant d'étoile noires que le nombre entier le plus proche du children */}
        {emptyStar.repeat(maxStars - Math.round(props.children))} {/* il faut l'arrondi du children pour avoir un nombre entier et faire apparaitre l'étoile blanche s'il reste du vide laissé par les étoiles noires */}
      </p>
  );
}

export default Rating;