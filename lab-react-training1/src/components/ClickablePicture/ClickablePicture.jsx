import maxence from './../../assets/maxence.png'
import maxenceGlasses from './../../assets/maxence-glasses.png'
import { useState } from 'react'

const ClickablePicture = () => {
	const [imgSrc, setImgSrc] = useState(true)

	const handleImgSrc = () => {
		setImgSrc(!imgSrc)
	}

	return (
		<div className='ClickablePicture'>
			<img onClick={handleImgSrc} src={imgSrc ? maxence : maxenceGlasses} alt='Maxence' />
		</div>
	)
}

export default ClickablePicture
