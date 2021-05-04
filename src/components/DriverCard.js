import React from 'react'

class DriverCard extends React.Component {
  numOfStars(n) {
    const numb = Math.round(n)
    const stars = {
      0: '☆☆☆☆☆',
      1: '★☆☆☆☆',
      2: '★★☆☆☆',
      3: '★★★☆☆',
      4: '★★★★☆',
      5: '★★★★★',
    }
    return stars[numb]
  }

  render() {
    const { name, rating, img, car } = this.props
    return (
      <div className="box bluebox">
        <img src={img} alt={name} />
        <div>
          <h2>{name}</h2>
          <p>{this.numOfStars(rating)}</p>
          <p>
            {car.model} - {car.licensePlate}
          </p>
        </div>
      </div>
    )
  }
}

export default DriverCard
