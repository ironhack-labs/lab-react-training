const getRandom = (min, max) => {
	return Math.round(Math.random() * (max - min) + min)
}

export default getRandom
