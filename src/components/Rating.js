import React from 'react'

export default function Rating({children}) {

    const displayRating = () => {
        let starRatingResults = '';
        for (let i = 1; i <=5; i++) {
            if (i <= children) {
                starRatingResults += '★'
            } else {
                starRatingResults += '☆'
            }
        }
        return starRatingResults;
    }

  return (
    <div>{displayRating()}</div>
  )
}