import './Random.css'

import getRandom from '../../utils/random'

const Random = ({ min, max }) => {
	return (
		<>
			<p className='frame'>
				Random value between {min} and {max} &#61;&gt; {getRandom(min, max)}
			</p>
		</>
	)
}

export default Random
