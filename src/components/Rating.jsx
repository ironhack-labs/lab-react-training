function Rating(stars) {
  let rounded = Math.round(stars.children);
  let starsdisplay = '';

  if (rounded === 0) {
    starsdisplay = '☆☆☆☆☆';
  }
  if (rounded === 1) {
    starsdisplay = '★☆☆☆☆';
  }
  if (rounded === 2) {
    starsdisplay = '★★☆☆☆';
  }
  if (rounded === 3) {
    starsdisplay = '★★★☆☆';
  }
  if (rounded === 4) {
    starsdisplay = '★★★★☆';
  }
  if (rounded === 5) {
    starsdisplay = '★★★★★';
  }

  return (
    <div>
      <p>{starsdisplay}</p>
    </div>
  );
}

export default Rating;
