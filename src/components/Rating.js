const Rating = ({rating}) => {
   const fullStars = Math.round(rating);

   const stars = [];
   for (let i = 1; i <= 5; i++) {
     if (i <= fullStars) {
       stars.push('★');
     
     } else {
       stars.push('☆');
     }
   }
 
   return <div>
      {stars.map(star =>  {
         return star
      })}
      </div>;
 };


export default Rating;