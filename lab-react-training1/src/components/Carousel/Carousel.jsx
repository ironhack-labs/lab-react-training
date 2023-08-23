import { useState } from 'react'

let position = 0
const Carousel = ({ images }) => {
	const [imgSrc, setImgSrc] = useState(images[position])

	const handleCarouselimg = move => {
		position += move

		if (position > images.length - 1) {
			position = 0
		} else if (position < 0) {
			position = images.length - 1
		}

		setImgSrc(images[position])
	}

	return (
		<div className='Carousel'>
			<button onClick={() => handleCarouselimg(-1)}>Left</button>
			<img src={imgSrc} alt='pic' />
			<button onClick={() => handleCarouselimg(1)}>Right</button>
		</div>
	)
}

export default Carousel
