

function Rating(stars) {
    let averaged = Math.round(stars.children); 
    let starsdisplay = "";
    
        if (averaged===0) {starsdisplay = "☆☆☆☆☆"}
        if (averaged===1) {starsdisplay = "★☆☆☆☆"}
        if (averaged===2) {starsdisplay = "★★☆☆☆"}
        if (averaged===3) {starsdisplay = "★★★☆☆"}
        if (averaged===4) {starsdisplay ="★★★★☆"}
        if (averaged===5) {starsdisplay ="★★★★★"}
    
  return (
    <div>
      <p>{starsdisplay}</p>
    </div>
  )
}

export default Rating
